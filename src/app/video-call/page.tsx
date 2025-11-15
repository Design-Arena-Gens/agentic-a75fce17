'use client';

import { Video, VideoOff, Mic, MicOff, PhoneOff, MessageCircle, Users, Grid, Maximize, Settings } from 'lucide-react';
import { useState } from 'react';

export default function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
  };

  return (
    <main className="min-h-screen bg-black relative">
      {/* Main Video Area */}
      <div className="h-screen relative">
        {/* Doctor Video (Main) */}
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl mb-4 mx-auto">
              👩‍⚕️
            </div>
            <h2 className="text-heading-md text-white">{doctor.name}</h2>
            <p className="text-body text-white/80">{doctor.specialty}</p>
          </div>
        </div>

        {/* Self Video (Picture in Picture) */}
        <div className="absolute top-6 right-6 w-32 h-40 bg-gradient-to-br from-accent/40 to-primary/40 rounded-card overflow-hidden shadow-card">
          <div className="w-full h-full flex items-center justify-center">
            {isVideoOff ? (
              <div className="text-center">
                <VideoOff className="text-white mx-auto mb-1" size={32} />
                <p className="text-caption-sm text-white">Video Off</p>
              </div>
            ) : (
              <div className="text-4xl">👤</div>
            )}
          </div>
        </div>

        {/* Call Info */}
        <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-button px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-caption text-white">15:23</span>
          </div>
        </div>

        {/* Connection Quality */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-button px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-success rounded-full"></div>
              <div className="w-1 h-4 bg-success rounded-full"></div>
              <div className="w-1 h-5 bg-success rounded-full"></div>
            </div>
            <span className="text-caption text-white">Excellent</span>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-24 pb-8 px-6">
          <div className="max-w-lg mx-auto">
            {/* Main Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {/* Mute */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isMuted ? 'bg-error' : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {isMuted ? (
                  <MicOff className="text-white" size={28} />
                ) : (
                  <Mic className="text-white" size={28} />
                )}
              </button>

              {/* Video Toggle */}
              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isVideoOff ? 'bg-error' : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {isVideoOff ? (
                  <VideoOff className="text-white" size={28} />
                ) : (
                  <Video className="text-white" size={28} />
                )}
              </button>

              {/* End Call */}
              <button className="w-20 h-20 rounded-full bg-error flex items-center justify-center hover:bg-error/80 transition-all shadow-lg">
                <PhoneOff className="text-white" size={32} />
              </button>

              {/* Chat */}
              <button
                onClick={() => setShowChat(!showChat)}
                className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all relative"
              >
                <MessageCircle className="text-white" size={28} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white rounded-full text-caption-sm font-semibold flex items-center justify-center">
                  3
                </span>
              </button>

              {/* More Options */}
              <button className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                <Settings className="text-white" size={28} />
              </button>
            </div>

            {/* Secondary Controls */}
            <div className="flex items-center justify-center gap-6 text-white">
              <button className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-white/10 rounded-button flex items-center justify-center">
                  <Grid size={20} />
                </div>
                <span className="text-caption-sm">Layout</span>
              </button>
              <button className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-white/10 rounded-button flex items-center justify-center">
                  <Users size={20} />
                </div>
                <span className="text-caption-sm">Participants</span>
              </button>
              <button className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-white/10 rounded-button flex items-center justify-center">
                  <Maximize size={20} />
                </div>
                <span className="text-caption-sm">Fullscreen</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        {showChat && (
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-[-4px_0_12px_rgba(0,0,0,0.15)]">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-background">
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-sm text-textPrimary">Chat</h3>
                  <button onClick={() => setShowChat(false)} className="text-textSecondary hover:text-textPrimary">
                    ✕
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-sm">
                      👩‍⚕️
                    </div>
                    <div className="flex-1">
                      <p className="text-caption font-semibold text-textPrimary">Dr. Sarah Johnson</p>
                      <div className="bg-background rounded-button rounded-tl-none p-3 mt-1">
                        <p className="text-caption text-textPrimary">Hello! How are you feeling today?</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-row-reverse">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm">
                      👤
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-caption font-semibold text-textPrimary">You</p>
                      <div className="bg-primary text-white rounded-button rounded-tr-none p-3 mt-1 inline-block">
                        <p className="text-caption">I'm doing better, thank you!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-background">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-background rounded-button text-body text-textPrimary placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="w-10 h-10 bg-primary text-white rounded-button flex items-center justify-center">
                    <MessageCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
