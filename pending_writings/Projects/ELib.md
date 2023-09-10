# ELib

#Project #Personal-Growth

Author: Daniel Hou
Released on: Aug 25, 2023
Last Modified: Aug 25, 2023

The ELib project came into fruition in my final year of high school as a result of years of experience in VEX, a full year of research during COVID-19, and an ambition to prove myself capable. The project started as a re-wrapping of existing lower-level APIs from other VEX robotics frameworks to incorporate flexible use (given our programming conventions) of classical control methods like PID, and various data filtering methods like the Kalman Filter. As the year progresses, I successfully derived the formula for discrete-time wheel odometry and was able to incorporate it on top of the existing ELib infrastructure at the time. As the project grows and after weeks of reading online, I realized that localization was merely a small section of robotics, and those articles provided me insights into path planning and path following sectors. I then dove into the derivation and implementation of the Pure Pursuit algorithm, which after some research was believed to be a good balance between performance and computational cost. For path planning, besides linear interpolation, I implemented DFS-based naive path planning as well as A* heuristic methods. My friend Elijah explored Splining, but was not able to make it on time to be implemented for the World Championship. While the World Championship marks the end of development for ELib (as I am going to college), this doesn't mean this journey in robotic exploration ends. Rather, I have learned much about other subfields of Robotics since then, and I am determined to continue that journey. 

Looking back, this approach of doing random reading online in a field that I was not actually familiar with is not the most efficient way of learning. This is why in recent research (like with MSKJ) I started not just with online articles to help understanding but also read books concurrently to build a big-picture view of the field. 