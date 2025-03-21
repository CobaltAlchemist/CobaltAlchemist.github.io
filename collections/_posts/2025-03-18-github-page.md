---
layout: post
title: "Setting up a Github Page"
date: 2014-04-30
---

Recently, I was chatting with my professor, and he mentioned something about setting up a lab page. This conversation sparked my curiosity, and before I knew it, I found myself diving into creating my own website. After a little bit of exploration, I discovered GitHub Pages, a remarkably convenient way to host personal pages, and decided to give it a try.

### Why?

{% include figure.html cols=2 float="right" url="/assets/images/posts/setting-up-github-page/earliest-deployed.png" description="This was one of the first versions actually publically available! It's terrible" %}

The main motivation for setting up this website was simplicity. If I have a new paper or project I want to showcase, this setup makes it incredibly straightforward to share. Plus, it's an effortless way to keep my resume and CV easily accessible.

Initially, I stumbled upon this [helpful guide](https://jmcglone.com/guides/github-pages/) on setting up GitHub Pages with Jekyll. It was straightforward enough to get started, but soon I found myself deviating from the guide, exploring things like local deployments for quicker iteration and testing. This was a huge improvement over waiting for GitHub's Jekyll build every time I pushed a change. I also briefly looked into styling options such as Tailwind CSS but ultimately chose to keep things simple with basic SCSS.

### Challenges

Coming from a background where most of my frontend tinkering has been with React, working with Jekyll was a lot simpler. Static pages do present some unique challenges since I'm dealing with pure SCSS and HTML. Initially it was a struggle, given how much freedom frameworks typically provide. Adding in occasional JavaScript, like implementing a dark mode, was interesting but came with its own set of quirks. And as usual, Windows threw a wrench into things, especially with Jekyll's livereload feature, which took some debugging.

{% include figure.html cols=2 float="left" url="/assets/images/posts/setting-up-github-page/new-page.png" description="Still not quite where I want to be, but it's better!" %}

What I appreciate most about Jekyll and GitHub Pages is precisely their simplicity. They don't try to do more than necessary, which just so happens to be exactly what I need for this use case. Admittedly, CSS and HTML aren't my favorite parts of the tech stack, but this experience was good practice and I think I can take this into future projects that deal with frontent. In a previous job we used C and implemented object-oriented programming manually which was a massive headache, but showed me a lot of the underlying mechanics of OOP. In that same way, this project has given me a better understanding of the frontend stack.

### Future Plans

While I've heard good things about alternatives like Hugo or Next.js, as long as GitHub Pages continues to support Jekyll seamlessly, I don't see myself switching anytime soon.

As for future enhancements, I might add an easy-to-access link for downloading my resume or exploring more ways to showcase projects. I'm generally cautious about overly self-promotional content, so I'm still deciding exactly what this site should include.

For anyone considering building their own site, I'd have to say just give it a shot. Pick something you want to explore, like CSS flexbox or GitHub Actions, and let the learning lead you. It's about finding small challenges and growing through them. That's certainly been my experience.
