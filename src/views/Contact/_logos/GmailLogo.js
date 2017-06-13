// @flow
import React from 'react'

// CONSTANTS ___________________________________________________________________
const GmailLogo = () => (
  <svg className="entry__logo" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
    <g className="icon-fill--muted icon-fill--gmail" fill="none" transform="translate(0 17)">
      <path fill="#E3E3E3" d="M130.612302,105.778715 L8.83433879,105.778715 C4.11233618,105.778715 0.135912905,101.929959 0.135912905,97.0879757 L0.135912905,9.18735319 C0.135912905,4.46952318 3.98807295,0.496613687 8.83433879,0.496613687 L130.612302,0.496613687 C135.334304,0.496613687 139.310727,4.34536976 139.310727,9.18735319 L139.310727,97.0879757 C139.310727,101.929959 135.458567,105.778715 130.612302,105.778715 L130.612302,105.778715 Z"/>
      <polygon fill="#231F20" points="17.533 105.779 69.599 63.939 69.972 61.704 16.29 23.093 16.166 103.916" opacity=".1"/>
      <path className="to-fill" d="M8.83433879,105.778715 C3.98807295,105.778715 0.135912905,101.929959 0.135912905,97.0879757 L0.135912905,9.06319976 C0.135912905,4.22121634 3.98807295,3.35214239 8.83433879,3.35214239 C13.6806047,3.35214239 17.5327647,4.34536976 17.5327647,9.06319976 L17.5327647,105.778715 L8.83433879,105.778715 L8.83433879,105.778715 Z"/>
      <path className="to-fill" d="M8.83433879 4.59367661C15.0475002 4.59367661 16.2901325 6.45597792 16.2901325 9.06319976L16.2901325 104.537181 8.83433879 104.537181C4.73365231 104.537181 1.37854518 101.185039 1.37854518 97.0879757L1.37854518 9.06319976C1.37854518 6.33182449 2.62117745 4.59367661 8.83433879 4.59367661L8.83433879 4.59367661zM8.83433879 3.35214239C3.98807295 3.35214239.135912905 4.34536976.135912905 9.06319976L.135912905 97.0879757C.135912905 101.929959 3.98807295 105.778715 8.83433879 105.778715L17.5327647 105.778715 17.5327647 9.06319976C17.5327647 4.22121634 13.6806047 3.35214239 8.83433879 3.35214239L8.83433879 3.35214239 8.83433879 3.35214239zM130.612302 105.778715L121.913876 105.778715 121.913876 8.81489296C121.913876 3.97290949 125.766035 3.35214239 130.612302 3.35214239 135.458567 3.35214239 139.310727 3.97290949 139.310727 8.81489296L139.310727 97.212129C139.310727 101.929959 135.458567 105.778715 130.612302 105.778715L130.612302 105.778715z"/>
      <path className="to-fill" d="M130.612302,4.59367661 C136.204147,4.59367661 138.068095,5.7110574 138.068095,8.81489296 L138.068095,97.212129 C138.068095,101.309192 134.712988,104.661335 130.612302,104.661335 L123.156508,104.661335 L123.156508,8.81489296 C123.156508,5.58690397 125.020456,4.59367661 130.612302,4.59367661 L130.612302,4.59367661 Z M130.612302,3.35214239 C125.766035,3.35214239 121.913876,3.97290949 121.913876,8.81489296 L121.913876,105.902868 L130.612302,105.902868 C135.458567,105.902868 139.310727,102.054113 139.310727,97.212129 L139.310727,8.81489296 C139.310727,3.97290949 135.458567,3.35214239 130.612302,3.35214239 L130.612302,3.35214239 L130.612302,3.35214239 Z"/>
      <path fill="#000000" fillOpacity=".155" d="M93.3333335,105.778715 L0.863952611,12.6734225 L5.72775815,14.6501038 L70.09611,60.9593302 L139.31073,10.2505623 L139.310728,97.212129 C139.310728,101.929959 135.458567,105.778715 130.612302,105.778715 L93.3333335,105.778715 Z"/>
      <path className="to-fill" d="M69.599057,63.939012 L3.86380972,16.2640983 C0.0116496775,13.4085696 -1.10671937,7.94581901 1.75133486,4.09706292 C4.60938908,0.248306844 10.2012343,-0.620767106 14.1776576,2.23476159 L69.7233201,42.5846236 L125.641772,1.73814791 C129.493932,-1.11738079 134.961514,-0.248306844 137.819569,3.72460265 C140.677623,7.57335872 139.807781,13.0361093 135.831357,15.891638 L69.599057,63.939012 L69.599057,63.939012 Z"/>
      <path className="to-fill" d="M130.612302,1.24153422 L130.612302,1.24153422 C132.973303,1.24153422 135.210041,2.35891501 136.7012,4.34536976 C139.062201,7.69751215 138.316621,12.2911887 135.085777,14.7742572 L69.599057,62.4491711 L4.60938908,15.2708709 C1.25428195,12.7878025 0.384439359,8.06997244 2.74544068,4.84198345 C4.11233618,2.97968212 6.4733375,1.73814791 8.95860202,1.73814791 C10.574024,1.73814791 12.189446,2.23476159 13.4320782,3.22798896 L68.8534777,43.4536976 L69.599057,43.9503113 L70.3446363,43.4536976 L126.138825,2.60722186 C127.505721,1.73814791 128.996879,1.24153422 130.612302,1.24153422 L130.612302,1.24153422 Z M130.612302,0 C128.872616,0 127.008668,0.496613687 125.517509,1.61399448 L69.599057,42.4604702 L14.0533944,2.11060817 C12.5622356,0.993227376 10.6982872,0.496613687 8.83433879,0.496613687 C6.1005478,0.496613687 3.36675682,1.73814791 1.62707163,4.09706292 C-1.10671937,7.94581901 0.0116496775,13.4085696 3.86380972,16.2640983 L69.599057,64.0631654 L135.707094,15.891638 C139.559254,13.0361093 140.429097,7.69751215 137.695305,3.72460265 C135.95562,1.24153422 133.346093,0 130.612302,0 L130.612302,0 L130.612302,0 Z"/>
    </g>
  </svg>
)

export default GmailLogo
