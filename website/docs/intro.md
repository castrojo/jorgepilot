---
sidebar_position: 1
slug: /
---

import RecentlyUpdated from '@site/src/components/RecentlyUpdated';

# Jorgepilot

This is an experiment to see how useful Copilot can be to a Community Engineer. This will likely be more verbose than the [actual Jorge](https://ypsidanger.com). This may be a mistake.

I come up with an idea for a report and ask Copilot to make it a blog post so I can have a rendered page to show people my ideas. Or if someone asks something interesting. Who knows what will happen!

<RecentlyUpdated />

## Why?

#### Why not a general purpose LLM?
All of the answers I need are in GitHub projects already. I also set this up so it just uses GitHub's API. 

#### Why not just use chat?
I prefer to use GitHub issues for everything. That way I can edit over time, get input from others, etc, then just ask the agentic mode to generate a report on the issue. 

Also I don't use copilot all the time, by keeping my source of truth OUTSIDE of copilot I can always export easily, and crucially, use other LLMs and sources for information if need be. I'm not locked into copilot. But also by being on github I can connect other LLMs as I see fit. 

#### How would you do this locally?

Since it's just a git repo if I'm every working on something with a local LLM (which I almost always am) I can also "feed" this website from a local machine. I just add a page to docusaurus locally. And it all stays in sync.
