"use client";
import React from "react";
import Link from "next/link";

export default function HallOfFame() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <img 
                  src="https://petition.ph/logos/svg/BetterGov_Icon-Primary.svg" 
                  alt="BetterGov Logo" 
                  className="h-8 w-auto"
                />
              </Link>
              <h1 className="text-xl font-semibold text-blue-700">
                Hall of Fame
              </h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-700">Security Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-8 text-blue-600 border-b pb-4">
            Security Researcher Hall of Fame
          </h2>
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 mb-4">
              We extend our sincere gratitude to the following security researchers who have helped make BetterGov more secure through responsible vulnerability reporting.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-gray-700">
                Want to be featured here? Check out our{" "}
                <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                  Security Policy
                </Link>
                {" "}to learn how to participate in our security program.
              </p>
            </div>
          </div>

          {/* Researchers Grid */}
          <div className="grid gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-blue-700 text-lg">zchown</h3>
                  <p className="text-gray-500 text-sm">October 2025</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  High
                </span>
              </div>
              <p className="text-gray-700 mb-3">
                Discovered and responsibly reported a Broken Access Control Vulnerability in petition.ph
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Impact:</span> Authenticated user can edit any petition
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Affected Site:</span>{" "}
                  <a href="https://petition.ph" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    petition.ph
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-16 text-center text-gray-600">
        <p>© 2025 BetterGov.ph – All content is public domain unless otherwise specified.</p>
        <p>
          Contribute at{" "}
          <a
            href="https://github.com/bettergovph/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
