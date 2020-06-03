# remote-five-finger

online five-finger work tool

# How to use

## local

### install

- git (of course!)
  - https://git-scm.com/downloads

- meteor (works on 1.10)
  - https://www.meteor.com/install

### clone & start

```sh
git clone https://github.com/kamehiro17/remote-five-finger.git
cd remote-five-finger
meteor npm install # install packages
meteor --port 3000 # run application (listen 3000 port)
```

### access

for member: `http://localhost:3000` ( or `http://localhost:3000/front`)  

1. Enter your name  
2. Choose today's finger(how is it going on?)  
3. Add short message and hit button.  
4. When facilitator announced, your screen will be transitions to today's result.

for facilitator: `http://localhost:3000/facilitator-console`

## as a Docker Container

[WIP]