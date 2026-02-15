import { useState, useRef, useEffect } from "react";
import { RiPlayFill, RiPauseFill, RiVolumeUpFill, RiVolumeMuteFill } from "react-icons/ri";

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  getPlayerState: () => number;
  destroy?: () => void;
}

// YouTube API Types
declare global {
  interface Window {
    YT: {
      Player: {
        new (element: HTMLElement | string, options: YTPlayerOptions): YTPlayer;
      };
      PlayerState: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
        UNSTARTED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

// YouTube Player Interface
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  getPlayerState: () => number;
  getCurrentTime: () => number;
  getDuration: () => number;
  destroy: () => void;
}

// YouTube Player Options
interface YTPlayerOptions {
  videoId?: string;
  width?: number | string;
  height?: number | string;
  playerVars?: {
    autoplay?: 0 | 1;
    controls?: 0 | 1;
    disablekb?: 0 | 1;
    fs?: 0 | 1;
    iv_load_policy?: 1 | 3;
    modestbranding?: 0 | 1;
    rel?: 0 | 1;
    showinfo?: 0 | 1;
    mute?: 0 | 1;
    loop?: 0 | 1;
    playlist?: string;
    start?: number;
    end?: number;
  };
  events?: {
    onReady?: (event: { target: YTPlayer }) => void;
    onStateChange?: (event: { data: number }) => void;
    onError?: (event: { data: number }) => void;
  };
}

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  
  const playerRef = useRef<YouTubePlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerInitializedRef = useRef(false);

  const videoId = "mu7iWM7kv0g";

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (containerRef.current && !playerInitializedRef.current) {
        playerInitializedRef.current = true;
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            mute: 1,
            loop: 1,
            playlist: videoId, // Required for looping
          },
          events: {
            onReady: () => {
              setIsPlayerReady(true);
            },
            onStateChange: (event: { data: number }) => {
              // YouTube state: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
              setIsPlaying(event.data === 1);
            },
          },
        });
      }
    };

    // Cleanup function
    return () => {
      // Remove the script tag if it exists
      const scriptTag = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (scriptTag) {
        scriptTag.remove();
      }
      
      // Reset the API ready callback
      window.onYouTubeIframeAPIReady = () => {};
      
      // Note: YouTube player doesn't have a destroy method in the basic type
      // The player will be garbage collected when the component unmounts
      playerInitializedRef.current = false;
    };
  }, [videoId]);

  const togglePlay = () => {
    if (playerRef.current && isPlayerReady) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const toggleMute = () => {
    if (playerRef.current && isPlayerReady) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-12 md:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-100 to-blue-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-2" data-aos="fade-down">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <img
                className="relative h-14 w-auto object-contain"
                src="/logo.png"
                alt="WhiteLoop"
                loading="lazy"
              />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              WhiteLoop
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Transform Your Business with
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text">
              AI Video Creation
            </span>
          </h1>
          
          <p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Create stunning, personalized videos at scale. From brand stories to AI-generated content, 
            WhiteLoop brings your vision to life.
          </p>
        </div>

        {/* Video Section with Custom Controls */}
        <div 
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Video Container */}
          <div className="relative aspect-video bg-black">
            {/* YouTube Player Container */}
            <div 
              ref={containerRef}
              className="absolute inset-0 w-full h-full"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Custom Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    disabled={!isPlayerReady}
                  >
                    {isPlaying ? (
                      <RiPauseFill className="text-white text-lg" />
                    ) : (
                      <RiPlayFill className="text-white text-lg" />
                    )}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    disabled={!isPlayerReady}
                  >
                    {isMuted ? (
                      <RiVolumeMuteFill className="text-white text-lg" />
                    ) : (
                      <RiVolumeUpFill className="text-white text-lg" />
                    )}
                  </button>
                </div>

                {/* Loading/Ready Indicator */}
                {!isPlayerReady && (
                  <div className="text-white text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    Loading...
                  </div>
                )}
              </div>
            </div>

            {/* Play Button Overlay (when paused) */}
            {!isPlaying && isPlayerReady && (
              <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group hover:bg-white transition-all duration-300 hover:scale-110"
              >
                <RiPlayFill className="text-4xl text-gray-900 group-hover:text-violet-600" />
              </button>
            )}

            {/* Loading State */}
            {!isPlayerReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-white text-center">
                  <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4 mx-auto" />
                  <p className="text-sm text-white/80">Loading video...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;