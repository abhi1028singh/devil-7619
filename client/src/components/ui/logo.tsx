import React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`font-bold flex items-center ${className}`}>
      <div className="flex items-center">
        <span className="text-primary text-2xl font-bold">
          <span className="relative">
            A
            <span className="absolute -top-1 right-0 text-xs text-primary">•</span>
          </span>
          bhi
        </span>
        <span className="text-white text-2xl">.dev</span>
      </div>
    </div>
  );
}