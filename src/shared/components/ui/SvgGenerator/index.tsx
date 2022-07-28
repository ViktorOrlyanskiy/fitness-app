import { FC } from 'react';
import './svg-generator.scss';

// копируем svg код в case. в качестве id передаем название.

export enum variant {
    trash_xmart = 'trash-xmart', //
    chevron_left = 'chevron-left', //
    pencil = 'pencil', //
    pencil_light = 'pencil-light', //
    check = 'check', //
    circle_minus = 'circle-minus',
    circle_up = 'circle-up',
    flag_checkered = 'flag-checkered',
    plus = 'plus', //
    bars = 'bars', //
    play = 'play', //
    chart = 'chart', //
    angles_right = 'angles-right', //
    copy = 'copy', //
}

interface SvgGeneratorProps {
    id: string;
}

export const SvgGenerator: FC<SvgGeneratorProps> = ({ id }) => {
    switch (id) {
        case variant.trash_xmart:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M148.7 212.7C154.9 206.4 165.1 206.4 171.3 212.7L224 265.4L276.7 212.7C282.9 206.4 293.1 206.4 299.3 212.7C305.6 218.9 305.6 229.1 299.3 235.3L246.6 288L299.3 340.7C305.6 346.9 305.6 357.1 299.3 363.3C293.1 369.6 282.9 369.6 276.7 363.3L224 310.6L171.3 363.3C165.1 369.6 154.9 369.6 148.7 363.3C142.4 357.1 142.4 346.9 148.7 340.7L201.4 288L148.7 235.3C142.4 229.1 142.4 218.9 148.7 212.7zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H413.7L388.2 452.6C385.9 486.1 357.1 512 324.4 512H123.6C90.01 512 62.15 486.1 59.75 452.6L34.29 96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM91.67 450.3C92.87 467 106.8 480 123.6 480H324.4C341.2 480 355.1 467 356.3 450.3L381.6 96H66.37L91.67 450.3z" />
                </svg>
            );

        case variant.chevron_left:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z" />
                </svg>
            );
        case variant.pencil_light:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M373.2 16.97C395.1-4.901 430.5-4.901 452.4 16.97L495 59.6C516.9 81.47 516.9 116.9 495 138.8L182.3 451.6C170.9 462.9 156.9 471.2 141.5 475.8L20.52 511.3C14.9 512.1 8.827 511.5 4.687 507.3C.5466 503.2-1.002 497.1 .6506 491.5L36.23 370.5C40.76 355.1 49.09 341.1 60.44 329.7L373.2 16.97zM429.8 39.6C420.4 30.22 405.2 30.22 395.8 39.6L341 94.4L417.6 170.1L472.4 116.2C481.8 106.8 481.8 91.6 472.4 82.23L429.8 39.6zM109.6 402.4L173.4 415.2L394.1 193.6L318.4 117L96.84 338.6L109.6 402.4zM70.51 370.2C69.08 373.2 67.88 376.3 66.93 379.5L39.63 472.4L132.4 445.1C135.7 444.1 138.8 442.9 141.8 441.5L92.86 431.7C86.53 430.4 81.58 425.5 80.31 419.1L70.51 370.2z" />
                </svg>
            );
        case variant.pencil:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C139.9 428.9 142.2 427.1 144.4 426.9L108.1 419.6C100.2 418 93.97 411.8 92.39 403.9L85.13 367.6C84.02 369.8 83.11 372.1 82.42 374.4L59.44 452.6zM180.7 393.3L383 191L320.1 128.1L118.7 331.3L128.1 383L180.7 393.3z" />
                </svg>
            );
        case variant.check:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                </svg>
            );
        case variant.circle_minus:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168z" />
                </svg>
            );
        case variant.circle_up:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c141.4 0 256-114.6 256-256S397.4 0 256 0zM382.8 246.1C380.3 252.1 374.5 256 368 256h-64v96c0 17.67-14.33 32-32 32h-32c-17.67 0-32-14.33-32-32V256h-64C137.5 256 131.7 252.1 129.2 246.1C126.7 240.1 128.1 233.3 132.7 228.7l112-112c6.248-6.248 16.38-6.248 22.62 0l112 112C383.9 233.3 385.3 240.1 382.8 246.1z" />
                </svg>
            );
        case variant.flag_checkered:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M509.5 .0234c-6.145 0-12.53 1.344-18.64 4.227c-44.11 20.86-76.81 27.94-104.1 27.94c-57.89 0-91.53-31.86-158.2-31.87C195 .3203 153.3 8.324 96 32.38V32c0-17.75-14.25-32-32-32S32 14.25 32 32L31.96 496c0 8.75 7.25 16 16 16H80C88.75 512 96 504.8 96 496V384c51.74-23.86 92.71-31.82 128.3-31.82c71.09 0 120.6 31.78 191.7 31.78c30.81 0 65.67-5.969 108.1-23.09C536.3 355.9 544 344.4 544 332.1V30.74C544 12.01 527.8 .0234 509.5 .0234zM480 141.8c-31.99 14.04-57.81 20.59-80 22.49v80.21c25.44-1.477 51.59-6.953 80-17.34V308.9c-22.83 7.441-43.93 11.08-64.03 11.08c-5.447 0-10.71-.4258-15.97-.8906V244.5c-4.436 .2578-8.893 .6523-13.29 .6523c-25.82 0-47.35-4.547-66.71-10.08v66.91c-23.81-6.055-50.17-11.41-80-12.98V213.1C236.2 213.7 232.5 213.3 228.5 213.3C208.8 213.3 185.1 217.7 160 225.1v69.1C139.2 299.4 117.9 305.8 96 314.4V250.7l24.77-10.39C134.8 234.5 147.6 229.9 160 225.1V143.4C140.9 148.5 120.1 155.2 96 165.3V101.8l24.77-10.39C134.8 85.52 147.6 80.97 160 77.02v66.41c26.39-6.953 49.09-10.17 68.48-10.16c4.072 0 7.676 .4453 11.52 .668V65.03C258.6 66.6 274.4 71.55 293.2 77.83C301.7 80.63 310.7 83.45 320 86.12v66.07c20.79 6.84 41.45 12.96 66.71 12.96c4.207 0 8.781-.4766 13.29-.8594V95.54c25.44-1.477 51.59-6.953 80-17.34V141.8zM240 133.9v80.04c18.61 1.57 34.37 6.523 53.23 12.8C301.7 229.6 310.7 232.4 320 235.1V152.2C296.1 144.3 271.6 135.8 240 133.9z" />
                </svg>
            );
        case variant.plus:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256C432 269.3 421.3 280 408 280h-160v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200 440v-160h-160c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160v-160c0-13.25 10.75-23.99 24-23.99S248 58.75 248 72v160h160C421.3 232 432 242.8 432 256z" />
                </svg>
            );
        case variant.bars:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z" />
                </svg>
            );
        case variant.play:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM56.34 66.35C51.4 63.33 45.22 63.21 40.17 66.04C35.13 68.88 32 74.21 32 80V432C32 437.8 35.13 443.1 40.17 445.1C45.22 448.8 51.41 448.7 56.34 445.7L344.3 269.7C349.1 266.7 352 261.6 352 256C352 250.4 349.1 245.3 344.3 242.3L56.34 66.35z" />
                </svg>
            );
        case variant.chart:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z" />
                </svg>
            );
        case variant.angles_right:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M233.3 239.4l-176-184C48.19 45.84 33 45.49 23.41 54.65C18.47 59.37 16 65.68 16 71.99c0 5.969 2.219 11.94 6.656 16.59L182.8 256l-160.1 167.4c-9.125 9.594-8.844 24.78 .75 33.94c9.594 9.156 24.78 8.813 33.94-.75l176-184C242.2 263.3 242.2 248.7 233.3 239.4zM425.3 239.4l-176-184C240.2 45.84 225 45.49 215.4 54.65C210.5 59.37 208 65.68 208 71.99c0 5.969 2.219 11.94 6.656 16.59L374.8 256l-160.1 167.4c-9.125 9.594-8.844 24.78 .75 33.94c9.594 9.156 24.78 8.813 33.94-.75l176-184C434.2 263.3 434.2 248.7 425.3 239.4z" />
                </svg>
            );
        case variant.copy:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M272 416C263.2 416 256 423.2 256 432V448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h112C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128H63.99c-35.35 0-64 28.65-64 64l.0098 256C0 483.3 28.65 512 64 512h160c35.35 0 64-28.65 64-64v-16C288 423.2 280.8 416 272 416zM502.6 86.63l-77.25-77.25C419.4 3.371 411.2 0 402.7 0H288C252.7 0 224 28.65 224 64v256c0 35.35 28.65 64 64 64h160c35.35 0 64-28.65 64-64V109.3C512 100.8 508.6 92.63 502.6 86.63zM416 45.25L466.7 96H416V45.25zM480 320c0 17.67-14.33 32-32 32h-160c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h96l.0026 64c0 17.67 14.33 32 32 32H480V320z" />
                </svg>
            );
        default:
            return null;
    }
};
