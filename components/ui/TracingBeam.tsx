"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl font-semibold mb-4">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item.video && (
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg mb-6 object-cover w-full"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Communicate in countless ways from one place.",
    description: (
      <>
        <p>
          Slack is built for bringing people and information together. Type
          things out. Talk things through. Invite external organisations into
          the conversation.
        </p>
        <p className="font-semibold text-lg">80%</p>
        <p>
          of the Fortune 100 use Slack Connect to work with partners and
          customers.
        </p>
      </>
    ),
    badge: "Collaboration",
    video: "/time-1.webm",
  },
  {
    title: "Manage projects and move work forwards faster.",
    description: (
      <>
        <p>
          Prioritise tasks, share ideas and stay aligned. Slack brings every
          piece of your project together from start to finish.
        </p>
        <p className="font-semibold text-lg">47%</p>
        <p>increase in productivity for teams using Slack.</p>
      </>
    ),
    badge: "Project Management",
    video: "/time-2.webm",
  },
  {
    title: "Tap into the tools that you already use.",
    description: (
      <>
        <p>
          Over 2,600 apps are ready to connect in Slack, so you can automate
          everyday tasks in the flow of work and save your team precious time.
        </p>
        <p className="font-semibold text-lg">35%</p>
        <p>increase in time saved due to automation for Slack users.</p>
      </>
    ),
    badge: "Integrations",
    video: "/time-3.webm",
  },
  {
    title: "Do more with AI that works where you do.",
    description: (
      <>
        <p>
          Search your entire company history for answers, instantly catch up on
          conversations and get daily recaps of messages missed.
        </p>
        <p className="font-semibold text-lg">97 mins</p>
        <p>average time that users can save weekly with Slack AI.</p>
      </>
    ),
    badge: "Slack AI",
    video: "/time-4.webm",
  },
];
