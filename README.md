# Hello

This is sample code to test deployment and builds in Armainer. It is not an application to keep. When a build reaches the machine, switch the fleet to your own repository.

The sample is a one-page web site. It does not use a LED, a GPIO pin, or Wi-Fi.

## Board families

This sample is for every Armainer fleet:

- Raspberry Pi 3
- Raspberry Pi 4, Pi 400, Pi 5, Compute Module 4, and Compute Module 5
- Orange Pi 5, 5B, 5 Plus, and 5 Pro
- Banana Pi BPI-M5
- Generic x86 mini PC

The fleet builder compiles it for that board. A Pi, Orange Pi, or Banana Pi fleet gets an arm64 image. A mini PC fleet gets an amd64 image.

## Run it

In the fleet, build `https://github.com/Armainer/sample-hello.git` on branch `main`.

Open `http://<machine-address>:8080/`. The page says Hello.

If the fleet firewall is on, allow TCP port 8080 on the Security tab. The container listens on port 3000 inside, and the compose file publishes that as port 8080 on the machine.
