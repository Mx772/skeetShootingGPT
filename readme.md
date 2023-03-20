# This repo is a test of ChatGPT's logic on writing code without extra assistance. 

## The idea:
A simple html scorecard for skeet shooting. 

Example here:

![](https://giga.joesalter.com/9548/9548-04.jpg)

Or as Chat GPT said it:
```
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Name:               |     |     |     |     |     |     |     |     |
| Date:               |     |     |     |     |     |     |     |     |
| Location:           |     |     |     |     |     |     |     |     |
| Gun:                |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 1           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 2           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 3           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 4           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 5           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 6           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 7           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 8           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Total               |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
```

# **Attempt 1**:

### Prompt 1:
```
do you know what skeet shooting is, and how it is scored?
```

### Response:
```
Yes, I am familiar with skeet shooting!

Skeet shooting is a sport where participants use shotguns to shoot at clay targets, which are released from two fixed stations at different heights and angles. The targets are usually made to simulate the flight of birds, and the shooter must aim and hit them as they pass through a defined shooting area.

In terms of scoring, skeet shooting typically involves shooting at a total of 25 targets. These targets are released in a specific order, with a series of single and double targets being thrown from each station. The shooter has to hit each target as it crosses through a shooting zone, and they are scored based on the number of targets they hit.

Each hit target is worth one point, and the maximum possible score is 25. In the event of a tie, additional targets may be thrown to determine a winner. There are also penalties for failing to hit a target, such as being docked points or having to shoot again.

Skeet shooting can be a challenging and rewarding sport that requires a combination of hand-eye coordination, focus, and precision.
```

Notes:
> Great it knows what it is and the general idea of how it is scored. Using this information...

---

### Prompt 2:
```
Great! Can you write me some code for a simple web application that does the following:
- Lets the user input the amount of station, with how many targets at each station. 
- Lets users input their name. 
- Lets users keep track of the score of each user for each station
- On the far right, totals the scores from each station. 
- For each station, the score is either 'x' or 'o', with X being 1 or a hit, o being 0 or a miss. 
- Displays the information in a table like arrangement
- Is interactable
- Uses cookies to store the information incase the user refreshes the site. 
```

### Response:

[v1](https://github.com/Mx772/skeetShootingGPT/commit/22648f7d667689c4ed78712084bc827e6df21dcc)

Notes:
> Not bad. However, it doesn't *quite* work as you'd expect. As you can see in the code, it will browser-### Prompt you with a name, then 'Did Name1 hit Station 1, Target 1' ... until it goes through all iterations. This is not really how it'd work in the real world as you go back and forth between Shooter 1 and Shooter 2. Lets try and explain that.

---

### Prompt 3:
```
Can you make it so that you can add the players first (usually more than 1 player). 
Then generate and display the table. 

Then users can click on each target in the station to mark if they hit it or not. 
```

I probably could've worded this better, and the resulting code is likely my fault by pushing it more towards the *player* being the issue. 

### Response:
[V2](https://github.com/Mx772/skeetShootingGPT/commit/f96d15b5aa9f4f56dc12e13491536abb205687d9)

Notes:
> Obviously still no there yet, it doesn't quite work as it'll just ask for names then do nothing. Lets try again. I've seen other users use 'This error is thrown' or 'This doesn't work, this is happening'. Lets try that.

---

### Prompt 4:
```
Looks like that doesn't work. 
After putting the name of the player in, nothing happens. 
```

### Response:
[v3](https://github.com/Mx772/skeetShootingGPT/commit/57071f7b44e5c766e9e3eff5752eeac1316260a7)

Notes:
> I think I've lead it down the wrong path. At this point, lets try and restart. The code isn't horrible, but I don't think it knows how to actually fix the issue here. 

---


### Prompt 5:
```
Looks like it's still hitting the same issue. How about we start at the beginning. 
Do you know what a skeet scorecard looks like? 
```

### Response:
```
Yes, a skeet scorecard typically includes the following information:

The name of the shooter or team
The date and location of the shoot
The type of gun used
The number of targets thrown at each station
The score for each target, either as an "X" for a hit or an "O" for a miss
The total score for each station and for the entire round
Here's an example of what a skeet scorecard might look like:

|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Name:               |     |     |     |     |     |     |     |     |
| Date:               |     |     |     |     |     |     |     |     |
| Location:           |     |     |     |     |     |     |     |     |
| Gun:                |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 1           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 2           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 3           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 4           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 5           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 6           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 7           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Station 8           |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Total               |     |     |     |     |     |     |     |     |
|---------------------|-----|-----|-----|-----|-----|-----|-----|-----|
```

Notes:
> Yep, maybe if we can get it thinking of what a scorecard looks like, and base it off of that, we can get it to go in the right direction.

---


### Prompt 6:
```
Great. Can you write code for a website that will allow players to keep track of their scores on their phone that resembles the above scorecard? 

Allow it to be interactable, and let is use cookies so that all information isn't destroyed when refreshing. 
```

### Response:
[v4](https://github.com/Mx772/skeetShootingGPT/commit/aec211881995057272836f5e2feb5999d73baaf8)

Notes:
> At this point, it got stuck. It's first iteration gave me a HTML and JS script. This also doesn't quite work like it thinks it does. It also gave me an incomplete JS code. (I added only brackets and such to get it to run.)
Asking it to continue keeps giving me 'This is the complete code' and doesn't finish. (I believe because it has a character/line limit).

---

### Prompt 7:
```
Please give me complete code. 
```

### Response:
Errors. It would write a bit, then not finish it. When asked to continue it'd start from the beginning of the html file no matter how much Coaxing. 
I think it's history of the conversation is breaking it honestly. Lets restart. 

# **Attempt 2**:

### Prompt:
```
Do you know what a skeet scorecard looks like? 
Such as when it has multiple players and stations with generally 2 targets per station?
```

### Response:
```
Yes, I am familiar with skeet scorecards used in the sport of skeet shooting.

Typically, a skeet scorecard will have the names or initials of the shooters listed on the left-hand side, and the stations (numbered 1 through 8) listed across the top. Each station represents a different shooting position and angle, with the targets being thrown from either the high or low house.

The scorecard will have two columns under each station, one for each target thrown from that station. The columns are usually labeled with an "H" for high house and an "L" for low house. The shooter marks their hits and misses for each target in the corresponding column.

At the bottom of the scorecard, there will typically be space for the shooter to total up their hits and misses for each station, as well as their overall score for the round.

If there are multiple shooters on the scorecard, their scores will be listed in separate rows or columns, depending on the layout of the scorecard.
```

---


### Prompt 2:
```
could you give me an example in ascii art
```

### Response:
```
+--------+---+---+---+---+---+---+---+---+
| Shooter| 1H| 1L| 2H| 2L| 3H| 3L| 4H| 4L|
+--------+---+---+---+---+---+---+---+---+
|   AB   | X |   | X | X | X | X | X | X |
+--------+---+---+---+---+---+---+---+---+
|   CD   | X | X | X |   | X |   | X |   |
+--------+---+---+---+---+---+---+---+---+
|   EF   |   | X | X | X |   | X |   | X |
+--------+---+---+---+---+---+---+---+---+
|   GH   | X |   | X | X | X | X | X |   |
+--------+---+---+---+---+---+---+---+---+
|  Total | 4 | 3 | 5 | 3 | 5 | 4 | 5 | 4 |
+--------+---+---+---+---+---+---+---+---+

```

---

### Prompt 3:
```
That's fantastic. 

Could you write this into code for a simple web application using html, css, and javascript. 

Note, as an application, you have a character limit per ### Response. 
Can you make it so that you can write all of the code starting where you left off writing when I ask to continue?

```

### Response:
[v2.0](https://github.com/Mx772/skeetShootingGPT/commit/10721b29f927697e845ce97a883e080da5f787dc)

Notes:
> This actually works. But you have to enter `1`/ An Int to get the counting to work. 
Lets see if we can fix that. 

---


### Prompt 4:
```
Awesome!
Can you make it so that the user can customize the names, and how many stations? 
Also can you allow the javascript to count 'X' as 1?
```

### Response
[v2.1](https://github.com/Mx772/skeetShootingGPT/commit/8a8baeb63ba8c970c95fb273ec8729affee8aa26)

Notes:
> Super close. Lets see what we can do with this. 


---


### Prompt 5:
```
Very Close!
Looks like the total is the name of the first column, when it should be the last one. 
Currently the 'total' is going into the last station's number. 

Additionally, can you make the 'X' value it checks for case insensitive. 

Furthermore, each station has 2 potential targets. Can you add that in?

Thank you!
```

Reponse:

[v2.2](https://github.com/Mx772/skeetShootingGPT/commit/1d0cfe62fa25c3594315410a10bafdc5551b9fc3)


Notes:
> At this point, it gets a bit confused and rewrites just the html and drops the JS. 

---


### Prompt 6:
```
Using this code you just wrote, can you make it so that I can then edit the table it generates to add in scores (case insensitive 'X') 
Then total that in the total column. 
```

### Response:
[v2.3](https://github.com/Mx772/skeetShootingGPT/commit/e58215981bbdb9586677e1f6949bb602247c379f)

Notes:
> At this point, I basically say it has it. All that's not working is the scoring which is due to a bit of wrong code. I think dropping the cookie requirement (Which it really didn't get anyway) helped a bit. 
For giggles I tell it what's wrong. 

---


### Prompt 7:
```
This is super close! Great job!
The only thing that doesn't work is the scoring. 
It looks like it only goes up to a max of 8. It also doesn't auto-update. It shows 'NaN' until you fill out at least one of each station. 

it needs to add up both targets for each station, and display a number as soon you put any Xs in. 
```

### Response
[v2.4](https://github.com/Mx772/skeetShootingGPT/commit/ac7622254eed391e86352b5348e99f31d8bff973)

Notes:
> I had to regenerate this one several times, this is the closest I got. It would keep trying to regen the html completely, or given broken code. 
And this code still doesn't work, and its fix is really strange. But it's easy enough to fix that I call it here. 

# Summary:
I still see this is a great coding tool for developers, but not a replacement...yet. But it's getting closer and closer. 
At most ### Responses, you could take what it wrote in under a minute, and complete it and have a running concept in under 5 minutes. It really helps to possibly touch on functions you may have forgot about.
If you know the right 'keywords' it's looking for, you can probably coax better answers out of it. 

But the end result is pretty great if you don't know how to code, or even if you just want to slap a quick proof of concept of some site together. 

It took a total of 15 minutes to throw this together, which if I was still super profecient at HTML/JS it'd probably take me about the same. 
This is also using the March 14 Free Version of ChatGPT. Having access to the full/Plus version may result in better/longer ### Responses. 