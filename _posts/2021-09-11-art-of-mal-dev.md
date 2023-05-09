---
layout: post
title: The Art of Malware Development
description: Introduction to malware development and resources.
summary: Introduction to malware development and resources.
tags: malware-dev
---

## What is malware?

Malware is a catch-all term for any type of malicious software designed to harm or exploit any programmable device, service or network. Cybercriminals typically use it to extract data that they can leverage over victims for financial gain. That data can range from financial data, to healthcare records, to personal emails and passwords — the possibilities of what sort of information can be compromised have become endless.

## Why you should learn to write malware ?

So do every malware has a malicious purpose ? No. While many black hat hackers often use malware for causing harm, it is also used in red team operations to check the security of the target by using custom written malwares. Other than that malware development is very interesting you can also learn it to improve your understanding of how systems and security protocols work.

While malwares can be of many types here we’ll only be talking about Windows and Linux malwares for the sake of simplicity.

When starting work on any malware development, please make sure to use an isolated environment to work on malware related development or analysis.

## Windows Malware Development

Windows is a very famous operating system and its primary choice for malware development.

Study System Internals and architecture level stuff, level up from fundamental C programming to playing around WinAPI, first and foremost know what you want to code, and then code a lot, learn x86_64 or x86. The reason behind malwares being written in “low level languages” such as C/C++ is the fact that these languages have the ability to control memory and control some important system resources that other “higher level languages” can’t. For more guidance and source code check this out : [https://github.com/vxunderground/MalwareSourceCode](https://github.com/vxunderground/MalwareSourceCode). In addition to C/C++ you can also try experimenting with newer programming languages such as Rust (Rust is a statically-typed programming language designed for performance and safety, especially safe concurrency and memory management. Its syntax is similar to that of C++.) and Go (Go supports an easy process for cross-platform compilation. This allows malware developers to write code once and compile binaries from the same codebase for multiple platforms, allowing them to target Windows, Mac, and Linux from the same codebase, a versatility that they don’t usually have with many other programming languages.)

Here are some good resources to get you started:

[https://docs.microsoft.com/en-us/windows/win32/api/](https://docs.microsoft.com/en-us/windows/win32/api/)

[https://0xpat.github.io/Malware_development_part_1/](https://0xpat.github.io/Malware_development_part_1/)

[https://vx-underground.org/papers.html](https://vx-underground.org/papers.html)

And if learning Go probably RedCodeLabs repo might be of interest and try out series like building a packer and stuffs and stuffs related to system internals it’s quite fun.

## Linux Malware Development

Just like windows, Linux is a very famous operating system and mainly because it is open source there are varieties of Linux distros available out there. To make malware for Linux systems, you need to be familiar with how Linux systems work. The best resource to learn about it is the Linux Internals book otherwise known as Understanding the Linux Kernel. As with Windows, you can also use C/C++, Go or Rust for efficient malware development in Linux distributions.

To get started in Linux Malware Development check out the following resources:

[https://xcellerator.github.io/posts/linux_rootkits_01/](https://xcellerator.github.io/posts/linux_rootkits_01/)

[https://tmpout.sh/1/](https://tmpout.sh/1/)

[https://vx-underground.org/papers.html](https://vx-underground.org/papers.html)

Reading blogs and papers on malware development will help a lot throughout your journey. And always prefer to google before becoming completely helpless. Its also good to be a part of community of like minded people so here are some cool communities and organizations involved in malware development / VX (virus exchange) scene:

VX-UNDERGROUND

TMPOUT

Last but not least, please do not use this information to harm others. This blog is meant purely for educational purposes. Happy Hacking :)