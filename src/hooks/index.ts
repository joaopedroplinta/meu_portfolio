import { useState, useEffect, useRef } from "react";

export function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("");
  const state = useRef({ wordIndex: 0, isDeleting: false, displayed: "" });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const { wordIndex, isDeleting } = state.current;
      const current = words[wordIndex % words.length];

      if (!isDeleting) {
        const next = current.slice(0, state.current.displayed.length + 1);
        state.current.displayed = next;
        setDisplayed(next);

        if (next.length === current.length) {
          timeout = setTimeout(() => {
            state.current.isDeleting = true;
            tick();
          }, pauseMs);
          return;
        }
      } else {
        const next = current.slice(0, state.current.displayed.length - 1);
        state.current.displayed = next;
        setDisplayed(next);

        if (next.length === 0) {
          state.current.isDeleting = false;
          state.current.wordIndex += 1;
        }
      }

      timeout = setTimeout(tick, state.current.isDeleting ? deletingSpeed : typingSpeed);
    };

    timeout = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeout);
  }, [words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handle = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return progress;
}

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [threshold]);
  return scrolled;
}

export interface GitCommit { hash: string; msg: string; }

/** Busca os commits mais recentes de um repo público via API do GitHub (sem auth). */
export function useGitCommits(repo: string, count = 4) {
  const [commits, setCommits] = useState<GitCommit[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/repos/${repo}/commits?per_page=${count}`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API respondeu ${res.status}`);
        return res.json() as Promise<{ sha: string; commit: { message: string } }[]>;
      })
      .then((data) => {
        if (cancelled) return;
        setCommits(
          data.map((c) => ({
            hash: c.sha.slice(0, 7),
            msg: c.commit.message.split("\n")[0],
          }))
        );
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => { cancelled = true; };
  }, [repo, count]);

  return { commits, error };
}

/** Busca a versão mais recente (release ou tag) de um repo público via API do GitHub (sem auth). */
export function useLatestVersion(repo?: string) {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    if (!repo) return;
    let cancelled = false;

    fetch(`https://api.github.com/repos/${repo}/releases/latest`)
      .then((res) => {
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`GitHub API respondeu ${res.status}`);
        return res.json() as Promise<{ tag_name: string }>;
      })
      .then((release) => {
        if (cancelled) return;
        if (release?.tag_name) {
          setVersion(release.tag_name);
          return;
        }
        return fetch(`https://api.github.com/repos/${repo}/tags?per_page=1`)
          .then((res) => {
            if (!res.ok) throw new Error(`GitHub API respondeu ${res.status}`);
            return res.json() as Promise<{ name: string }[]>;
          })
          .then((tags) => {
            if (!cancelled && tags[0]?.name) setVersion(tags[0].name);
          });
      })
      .catch(() => {});

    return () => { cancelled = true; };
  }, [repo]);

  return version;
}

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}