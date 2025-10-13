---
slug: /
---

import SectionIndex from '@site/src/components/SectionIndex';

# Jorgepilot

_My mental scratchpad_

This is an experiment to see how useful Copilot can be to a Community Engineer. I use it my own personal interface to asking GitHub things, built for my specific needs. It's served by docusaurus to GitHub pages so I can share my ideas with friends.

## [File a task](https://github.com/castrojo/jorgepilot/issues)

This will likely be more verbose than the [actual Jorge](https://ypsidanger.com). This may be a mistake.

<SectionIndex sections={[
  {
    title: "Customization Guide",
    path: "/CUSTOMIZATION",
    description: "Learn how to personalize your pilot site with your own GitHub username, repository name, and custom tagline."
  },
  {
    title: "Reports",
    path: "/reports/",
    description: "Collection of project health checks, contribution guides, and analysis reports for CNCF, Universal Blue, and other open source projects."
  },
  {
    title: "CNCF Projects",
    path: "/reports/cncf/cncf-health-checks-report",
    description: "Analysis and health checks for Cloud Native Computing Foundation projects, including graduated, incubating, and sandbox projects."
  },
  {
    title: "Universal Blue Projects",
    path: "/reports/ublue/bluefin-health-check",
    description: "Health checks and contributing guides for Universal Blue ecosystem projects including Bluefin and Bazzite."
  },
  {
    title: "Other Projects",
    path: "/reports/other/external-secrets-operator-health-check",
    description: "Analysis of various other open source projects including infrastructure tools, security tools, and emerging technologies."
  }
]} />

## Why?

### Why not a general purpose LLM?

All of the answers I need are in GitHub projects already. I also set this up so it just uses GitHub's API.

### What's this one for?

This handles my hobby project, [Project Bluefin](https://projectbluefin.io) as well as my work things at [the CNCF](https://cncf.io). Use this repo as a template, follow the customization guide and make your own with your favorite combination of github orgs and repos.

### Why not just use chat?

I prefer to use GitHub issues for everything. That way I can edit over time, get input from others, etc, then just ask the agentic mode to generate a report on the issue.

Also I don't use copilot all the time, by keeping my source of truth OUTSIDE of copilot I can always export easily, and crucially, use other LLMs and sources for information if need be. I'm not locked into copilot. But also by being on github I can connect other LLMs as I see fit.

Also I can just add a bunch of static pages, I intend to see if I can make this a knowledge base.

### How would you do this locally?

Since it's just a git repo if I'm every working on something with a local LLM (which I almost always am) I can also "feed" this website from a local machine. I just add a page to docusaurus locally. And it all stays in sync.

### Isn't this just a wiki for lazy people?

Yep!
