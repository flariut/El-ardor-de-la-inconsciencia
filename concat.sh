#!/bin/bash

ffmpeg -i 1.mp4 -i 2.mp4 -i 3.mp4 \
       -filter_complex "[0:v] [0:a] [1:v] [1:a] [2:v] [2:a] 
                        concat=n=3:v=1:a=1 [v] [a]" \
       -map "[v]" -map "[a]" output.mp4
