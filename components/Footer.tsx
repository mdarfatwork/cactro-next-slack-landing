"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image src="/slack-logo.png" alt="Company Logo" width={120} height={40} />
          <p className="mt-4">
            A modern communication platform that brings teams together.
          </p>
        </div>

        {/* Product Links */}
        <FooterSection title="Product" links={["Watch demo", "Pricing", "Paid vs Free", "Accessibility", "Featured releases"]} />

        {/* Resources Links */}
        <FooterSection title="Resources" links={["Help Centre", "What’s new", "Slack blog", "Community", "Developers"]} />

        {/* Company Links */}
        <FooterSection title="Company" links={["About us", "News", "Careers", "Engineering blog", "Contact us"]} />
      </div>
    </footer>
  );
}

function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href="#">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
