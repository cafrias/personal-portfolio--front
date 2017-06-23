// @flow
import React from 'react'

const AboutHeading = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="480" height="100" viewBox="0 0 480 100">
    <defs>
      <linearGradient id="a" x1="24.519%" x2="24.581%" y1="-20.246%" y2="134.399%">
        <stop stopColor="#C15454" offset="0%"/>
        <stop stopColor="#A24343" offset="43.578%"/>
        <stop stopColor="#7F3030" offset="71.827%"/>
        <stop stopColor="#622121" offset="100%"/>
      </linearGradient>
    </defs>
    <path fill="url(#a)" fillRule="evenodd" d="M34.086,0.552 L58.65,0.552 L92.598,98.532 L65.274,98.532 L59.34,79.35 L33.258,79.35 L27.462,98.532 L0,98.532 L34.086,0.552 Z M55.062,61.41 L46.368,31.05 L37.26,61.41 L55.062,61.41 Z M183.930378,73.416 C183.930378,77.8320221 183.010388,81.6269841 181.170378,84.801 C179.330369,87.9750159 176.800394,90.5739899 173.580378,92.598 C170.360362,94.6220101 166.6114,96.1169952 162.333378,97.083 C158.055357,98.0490048 153.524402,98.532 148.740378,98.532 L100.578378,98.532 L100.578378,0.552 L157.434378,0.552 C160.838395,0.552 163.920365,1.28799264 166.680378,2.76 C169.440392,4.23200736 171.786369,6.14098827 173.718378,8.487 C175.650388,10.8330117 177.145373,13.500985 178.203378,16.491 C179.261384,19.4810149 179.790378,22.5399844 179.790378,25.668 C179.790378,30.268023 178.61739,34.6609791 176.271378,38.847 C173.925367,43.0330209 170.406402,46.1839894 165.714378,48.3 C171.326406,49.9560083 175.765362,52.8309795 179.031378,56.925 C182.297395,61.0190205 183.930378,66.5159655 183.930378,73.416 Z M156.606378,67.896 C156.606378,65.503988 155.962385,63.5030081 154.674378,61.893 C153.386372,60.2829919 151.730389,59.478 149.706378,59.478 L127.488378,59.478 L127.488378,75.9 L148.740378,75.9 C150.948389,75.9 152.811371,75.2100069 154.329378,73.83 C155.847386,72.4499931 156.606378,70.4720129 156.606378,67.896 Z M127.488378,23.46 L127.488378,38.502 L145.842378,38.502 C147.682388,38.502 149.361371,37.9960051 150.879378,36.984 C152.397386,35.9719949 153.156378,33.9480152 153.156378,30.912 C153.156378,28.2439867 152.512385,26.3350058 151.224378,25.185 C149.936372,24.0349943 148.418387,23.46 146.670378,23.46 L127.488378,23.46 Z M239.796757,99.36 C232.34472,99.36 225.582787,97.9340143 219.510757,95.082 C213.438726,92.2299857 208.240778,88.4810232 203.916757,83.835 C199.592735,79.1889768 196.234769,73.8760299 193.842757,67.896 C191.450745,61.9159701 190.254757,55.7520317 190.254757,49.404 C190.254757,42.9639678 191.496744,36.7540299 193.980757,30.774 C196.464769,24.7939701 199.937734,19.5270228 204.399757,14.973 C208.861779,10.4189772 214.151726,6.78501357 220.269757,4.071 C226.387787,1.35698643 233.08072,0 240.348757,0 C247.800794,0 254.562726,1.42598574 260.634757,4.278 C266.706787,7.13001426 271.904735,10.9019765 276.228757,15.594 C280.552778,20.2860235 283.887745,25.6219701 286.233757,31.602 C288.579768,37.5820299 289.752757,43.6999687 289.752757,49.956 C289.752757,56.3960322 288.510769,62.5829703 286.026757,68.517 C283.542744,74.4510297 280.092779,79.6949772 275.676757,84.249 C271.260735,88.8030228 265.993787,92.4599862 259.875757,95.22 C253.757726,97.9800138 247.064793,99.36 239.796757,99.36 Z M217.578757,49.68 C217.578757,52.9920166 218.038752,56.1889846 218.958757,59.271 C219.878761,62.3530154 221.258748,65.089988 223.098757,67.482 C224.938766,69.874012 227.261743,71.8059926 230.067757,73.278 C232.873771,74.7500074 236.208737,75.486 240.072757,75.486 C243.936776,75.486 247.294743,74.7270076 250.146757,73.209 C252.998771,71.6909924 255.321748,69.7130122 257.115757,67.275 C258.909766,64.8369878 260.243752,62.0540156 261.117757,58.926 C261.991761,55.7979844 262.428757,52.6240161 262.428757,49.404 C262.428757,46.0919834 261.968761,42.8950154 261.048757,39.813 C260.128752,36.7309846 258.725766,34.0170117 256.839757,31.671 C254.953747,29.3249883 252.607771,27.4390071 249.801757,26.013 C246.995743,24.5869929 243.706776,23.874 239.934757,23.874 C236.070737,23.874 232.735771,24.6099926 229.929757,26.082 C227.123743,27.5540074 224.800766,29.5089878 222.960757,31.947 C221.120748,34.3850122 219.763761,37.1449846 218.889757,40.227 C218.015752,43.3090154 217.578757,46.4599839 217.578757,49.68 Z M343.825135,75.486 C346.953151,75.486 349.621124,74.7960069 351.829135,73.416 C354.037146,72.0359931 355.831128,70.2190113 357.211135,67.965 C358.591142,65.7109887 359.603132,63.1120147 360.247135,60.168 C360.891138,57.2239853 361.213135,54.1420161 361.213135,50.922 L361.213135,0.552 L388.123135,0.552 L388.123135,50.922 C388.123135,57.730034 387.249144,64.1009703 385.501135,70.035 C383.753126,75.9690297 381.039154,81.0979784 377.359135,85.422 C373.679117,89.7460216 369.056163,93.1499876 363.490135,95.634 C357.924107,98.1180124 351.369173,99.36 343.825135,99.36 C336.005096,99.36 329.312163,98.0490131 323.746135,95.427 C318.180107,92.8049869 313.603153,89.2860221 310.015135,84.87 C306.427117,80.4539779 303.805143,75.3250292 302.149135,69.483 C300.493127,63.6409708 299.665135,57.4540327 299.665135,50.922 L299.665135,0.552 L326.575135,0.552 L326.575135,50.922 C326.575135,54.1420161 326.897132,57.2469851 327.541135,60.237 C328.185138,63.227015 329.197128,65.8489887 330.577135,68.103 C331.957142,70.3570113 333.728124,72.1509933 335.890135,73.485 C338.052146,74.8190067 340.69712,75.486 343.825135,75.486 Z M479.731514,24.012 L451.579514,24.012 L451.579514,98.532 L424.669514,98.532 L424.669514,24.012 L396.379514,24.012 L396.379514,0.552 L479.731514,0.552 L479.731514,24.012 Z"/>
  </svg>
)

export default AboutHeading