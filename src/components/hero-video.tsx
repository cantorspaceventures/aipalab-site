"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const POSTER_WEBP = "/video/henry-poster.webp";
const POSTER_JPG = "/video/henry-poster.jpg";
const SRC_HD = "/video/henry-1080.mp4";
const SRC_SD = "/video/henry-720.mp4";
const DURATION = "2:31";

/* Picks the 720p file for phones and slow connections, 1080p otherwise. */
function pickSource(): string {
  if (typeof window === "undefined") return SRC_SD;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (conn?.saveData || (conn?.effectiveType && /2g|3g/.test(conn.effectiveType))) return SRC_SD;
  const longest = Math.max(window.screen.width, window.screen.height) * (window.devicePixelRatio || 1);
  return longest >= 1280 && window.innerWidth >= 900 ? SRC_HD : SRC_SD;
}

/* Hero thumbnail. Nothing but the poster loads until the visitor clicks; then the video opens full screen with sound. */
export function HeroVideo() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState(SRC_SD);
  const [loading, setLoading] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    const v = videoRef.current;
    if (v) v.pause();
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    if (dialogRef.current?.open) dialogRef.current.close();
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const start = () => {
    setSrc(pickSource());
    setLoading(true);
    setOpen(true);
    dialogRef.current?.showModal();
    // True full screen where the browser allows it (desktop, Android). iPhone keeps the full-window player.
    const stage = stageRef.current;
    if (stage?.requestFullscreen) stage.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
  };

  // Start playback once the video element is in the page.
  useEffect(() => {
    if (!open) return;
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {
      /* Autoplay with sound was refused: the native controls stay visible so one tap starts it. */
      setLoading(false);
    });
  }, [open, src]);

  // Leaving full screen (Esc or the browser's own button) closes the player too.
  useEffect(() => {
    const onFs = () => {
      if (!document.fullscreenElement && dialogRef.current?.open) close();
    };
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, [close]);

  return (
    <>
      <button ref={triggerRef} type="button" className="hero-video" onClick={start} aria-label={`Play the aipalab introduction video, ${DURATION}, with sound`}>
        <picture>
          <source srcSet={POSTER_WEBP} type="image/webp" />
          <img src={POSTER_JPG} alt="" width={1280} height={720} fetchPriority="high" decoding="async" />
        </picture>
        <span className="hero-video-shade" aria-hidden="true" />
        <span className="hero-video-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
        </span>
        <span className="hero-video-caption">
          <span className="eyebrow">Meet Henry · {DURATION}</span>
          <span className="hero-video-title">A day with your AI analyst</span>
        </span>
      </button>

      <dialog ref={dialogRef} className="video-dialog" aria-label="aipalab introduction video" onCancel={(e) => { e.preventDefault(); close(); }}>
        <div ref={stageRef} className="video-stage">
          <button type="button" className="video-close" onClick={close} aria-label="Close video">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
          {open && (
            <video
              ref={videoRef}
              key={src}
              src={src}
              poster={POSTER_JPG}
              controls
              playsInline
              preload="auto"
              onWaiting={() => setLoading(true)}
              onPlaying={() => setLoading(false)}
              onCanPlay={() => setLoading(false)}
            />
          )}
          {open && loading && (
            <span className="video-loading" role="status">
              <span className="video-spinner" aria-hidden="true" />
              Loading video…
            </span>
          )}
        </div>
      </dialog>
    </>
  );
}
