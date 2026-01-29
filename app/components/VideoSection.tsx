'use client';

import { useState } from 'react';

const videos = [
  {
    id: 'IrAvA1qJNvI',
    title: 'The Science Behind Precision Dutasteride',
    description: 'Learn how our delivery system achieves 2-3x higher follicular targeting.',
  },
  {
    id: '8GrOeyUUCKw',
    title: 'Research & Development Journey',
    description: 'Two years of collaboration with University of Brasília.',
  },
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-slate-900 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm font-medium text-white/80">Watch the Research</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            See the Science in Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Deep dive into the research that makes Precision Dutasteride different.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main video player */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-800">
              {!isPlaying ? (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo.id}/maxresdefault.jpg`}
                    alt={activeVideo.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-all hover:scale-110 hover:bg-white"
                    >
                      <svg
                        className="ml-1 h-8 w-8 text-slate-900"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              )}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{activeVideo.title}</h3>
            <p className="mt-1 text-slate-400">{activeVideo.description}</p>
          </div>

          {/* Video list */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-slate-500">
              More Videos
            </h4>
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => {
                  setActiveVideo(video);
                  setIsPlaying(false);
                }}
                className={`group w-full rounded-xl border p-4 text-left transition-all ${
                  activeVideo.id === video.id
                    ? 'border-emerald-500/50 bg-emerald-500/10'
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex gap-4">
                  <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-slate-700">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
                        <svg className="ml-0.5 h-3 w-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-white line-clamp-2">{video.title}</h5>
                    <p className="mt-1 text-sm text-slate-400 line-clamp-2">{video.description}</p>
                  </div>
                </div>
              </button>
            ))}

            {/* Data room CTA */}
            <a
              href="https://drive.google.com/drive/folders/1NoUIYgLk2HjsmZMds2U8wbpfrjlys0VO"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-white">Full Data Room</div>
                <div className="text-sm text-slate-400">Access all research documents</div>
              </div>
              <svg className="ml-auto h-5 w-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
