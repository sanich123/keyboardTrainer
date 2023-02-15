import React from 'react';
import { langsData } from '../../Settings';
import { useState } from 'react';
import { RiKeyboardFill, RiTranslate } from 'react-icons/ri';
import { getRandomNum } from '../../../utils/getRandomNum';
import styles from './Keyboard.module.scss';
import './keyboardSVG.scss';

export interface KeyboardProps {
  lang: string;
  char: string;
  isRightKey: boolean;
  idx: number;
  setIdx: React.Dispatch<React.SetStateAction<number>>,
  keyLang: 'ru' | 'en',
  setKeyLang: React.Dispatch<React.SetStateAction<'ru' | 'en'>>,
}
export function Keyboard({ lang, char, isRightKey, idx, setIdx, keyLang, setKeyLang }: KeyboardProps) {
  const randomIterableKey = getRandomNum(0, 10000000000000);

  const keyboardKeys = {
    ru:
      [
        <g id="keys" key={randomIterableKey()}>
          <path id="tilda" className="st0" d="M58.4,53.7c0,1.7-1.4,3-3,3H18.9c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"></path>
          <path id="key-1" className="st0" d="M103.4,53.7c0,1.7-1.3,3-3,3H63.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="й" className="st0" d="M126.7,97.6c0,1.6-1.3,3-3,3H87.2c-1.7,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="ф" className="st0" d="M137.4,141.5c0,1.6-1.4,3-3,3H97.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="я" className="st0" d="M160.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V185.4z"></path>
          <path id="ч" className="st0" d="M205.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="с" className="st0" d="M250.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="м" className="st0" d="M295.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="и" className="st0" d="M340.8,185.4c0,1.7-1.4,3-3,3h-36.6c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.6c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="т" className="st0" d="M385.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="ь" className="st0" d="M430.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="б" className="st0" d="M475.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="ю" className="st0" d="M520.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z"></path>
          <path id="slash" className="st0" d="M565.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z"></path>
          <path id="ы" className="st0" d="M182.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="в" className="st0" d="M227.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="а" className="st0" d="M272.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="п" className="st0" d="M317.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="р" className="st0" d="M362.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="о" className="st0" d="M407.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="л" className="st0" d="M452.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="д" className="st0" d="M497.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="ж" className="st0" d="M542.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="э" className="st0" d="M587.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="ц" className="st0" d="M171.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="у" className="st0" d="M216.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V97.6z"></path>
          <path id="к" className="st0" d="M261.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="е" className="st0" d="M306.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="н" className="st0" d="M351.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="г" className="st0" d="M396.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="ш" className="st0" d="M441.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="щ" className="st0" d="M486.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="з" className="st0" d="M531.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="х" className="st0" d="M576.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="ъ" className="st0" d="M621.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="ё" className="st0" d="M668.8,97.6c0,1.6-1.3,3-3,3h-38.6c-1.6,0-3-1.4-3-3V62.4c0-1.6,1.4-3,3-3h38.6c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="key-2" className="st0" d="M148.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"></path>
          <path id="key-3" className="st0" d="M193.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"></path>
          <path id="key-4" className="st0" d="M238.4,53.7c0,1.7-1.4,3-3,3H199c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"></path>
          <path id="key-5" className="st0" d="M283.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z"></path>
          <path id="key-6" className="st0" d="M328.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z"></path>
          <path id="key-7" className="st0" d="M373.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="key-8" className="st0" d="M418.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="key-9" className="st0" d="M463.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="key-0" className="st0" d="M508.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="minus" className="st0" d="M553.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"></path>
          <path id="equal" className="st0" d="M598.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"></path>
          <path id="backspace" className="st0" d="M668.8,53.7c0,1.7-1.3,3-3,3h-61.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h61.9c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="tab" className="st0" d="M81.7,97.6c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h59.8c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="capslock" className="st0" d="M92.4,141.5c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h70.4c1.7,0,3,1.3,3,3V141.5z"></path>
          <path id="enter" className="st0" d="M668.8,141.5c0,1.6-1.3,3-3,3h-72.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h72.9c1.7,0,3,1.3,3,3V141.5z"></path>
          <path id="shift-left" className="st0" d="M115.8,185.4c0,1.7-1.3,3-3,3H18.9c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h93.8c1.7,0,3,1.4,3,3V185.4z"></path>
          <path id="control" className="st0" d="M105,236c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-42c0-1.7,1.3-3,3-3H102c1.7,0,3,1.3,3,3V236z"></path>
          <path id="option-left" className="st0" d="M182.4,236c0,1.7-1.4,3-3,3h-68.8c-1.7,0-3-1.3-3-3v-42c0-1.7,1.3-3,3-3h68.8c1.6,0,3,1.3,3,3V236z"></path>
          <path id="option-right" className="st0" d="M531.8,191c1.7,0,3,1.4,3,3v42c0,1.7-1.3,3-3,3h-62.9c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H531.8z"></path>
          <path className="st0" d="M668.8,236.1c0,1.7-1.3,3-3,3H540.3c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3h125.5c1.7,0,3,1.4,3,3V236.1z"></path>
          <path id="space" className="st0" d="M460.4,191c1.6,0,3,1.4,3,3v42c0,1.7-1.4,3-3,3H187.5c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H460.4z"></path>
          <path id="shift-right" className="st0" d="M668.8,185.4c0,1.7-1.3,3-3,3h-94.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h94.5c1.7,0,3,1.4,3,3V185.4z"></path>
        </g>,
        <g id="letters" key={randomIterableKey()}>
          <text transform="matrix(1 0 0 1 33.4903 33.804)" className="st1 st2" dx="2.546875" dy="0">[</text>
          <text transform="matrix(1 0 0 1 35.8009 52.6643)" className="st1 st2" dx="0.4765625" dy="0">]</text>
          <text transform="matrix(1 0 0 1 78.626 50.4071)" className="st1 st2" dx="0" dy="0">1</text>
          <text transform="matrix(1 0 0 1 123.299 51.1765)" className="st1 st2" dx="0" dy="0">2</text>
          <text transform="matrix(1 0 0 1 169.6841 51.404)" className="st1 st2" dx="0" dy="0">3</text>
          <text transform="matrix(1 0 0 1 213.0758 51.404)" className="st1 st2" dx="0" dy="0">4</text>
          <text transform="matrix(1 0 0 1 258.0724 51.404)" className="st1 st2" dx="0" dy="0">5</text>
          <text transform="matrix(1 0 0 1 303.2822 51.0891)" className="st1 st2" dx="0" dy="0">6</text>
          <text transform="matrix(1 0 0 1 349.5064 51.0891)" className="st1 st2" dx="0" dy="0">7</text>
          <text transform="matrix(1 0 0 1 393.281 51.2157)" className="st1 st2" dx="0" dy="0">8</text>
          <text transform="matrix(1 0 0 1 438.5742 51.2157)" className="st1 st2" dx="0" dy="0">9</text>
          <text transform="matrix(1 0 0 1 483.4907 51.2157)" className="st1 st2" dx="0" dy="0">0</text>
          <text transform="matrix(1 0 0 1 530.4011 50.4071)" className="st1 st2" dx="0" dy="0">-</text>
          <text transform="matrix(1 0 0 1 573.5195 51.2157)" className="st1 st2" dx="0" dy="0">=</text>
          <text transform="matrix(1 0 0 1 80.5513 31.7605)" className="st1 st2" dx="0" dy="0">!</text>
          <text transform="matrix(1 0 0 1 119.8565 30.45)" className="st1 st2" dx="5.703125" dy="0">&#34;</text>
          <text transform="matrix(1 0 0 1 169.6841 31.76)" className="st1 st2" dx="-4.2734375" dy="0">№</text>
          <text transform="matrix(1 0 0 1 213.0758 31.2171)" className="st1 st2" dx="-2.6875" dy="0">%</text>
          <text transform="matrix(1 0 0 1 255.5748 30.8318)" className="st1 st2" dx="5.281280517578125" dy="-2">:</text>
          <text transform="matrix(1 0 0 1 303.9556 32.4427)" className="st1 st2 b2" dx="0.65625" dy="-4">,</text>
          <text transform="matrix(1 0 0 1 348.2554 31.76)" className="st1 st2 b2" dx="2.156280517578125" dy="-4">.</text>
          <text transform="matrix(1 0 0 1 394.5334 32.8236)" className="st1 st2" dx="1.09375" dy="-4">;</text>
          <text transform="matrix(1 0 0 1 440.3076 30.6435)" className="st1 st2" dx="0" dy="0">(</text>
          <text transform="matrix(1 0 0 1 485.1645 30.6435)" className="st1 st2" dx="0" dy="0">)</text>
          <text transform="matrix(1 0 0 1 528.7588 25.5423)" className="st1 st2" dx="0" dy="0">_</text>
          <text transform="matrix(1 0 0 1 573.5195 32.4422)" className="st1 st2" dx="0" dy="0">+</text>
          <text transform="matrix(1 0 0 1 100.9088 75.4743)" className="st1" dx="0.515625" dy="0">Й</text>
          <text transform="matrix(1 0 0 1 100.9088 93.4743)" className="st1 st2 b" dx="-2.5625" dy="-6">й</text>
          <text transform="matrix(1 0 0 1 145.3644 75.4744)" className="st1" dx="2" dy="0">Ц</text>
          <text transform="matrix(1 0 0 1 145.3644 93.4744)" className="st1 st2 b" dx="-0.5859375" dy="-6">ц</text>
          <text transform="matrix(1 0 0 1 190.5943 75.4744)" className="st1" dx="-0.234375" dy="0">У</text>
          <text transform="matrix(1 0 0 1 190.5943 93.4744)" className="st1 st2 b" dx="-1.6875" dy="-6">у</text>
          <text transform="matrix(1 0 0 1 236.9933 75.4743)" className="st1" dx="1.203125" dy="0">К</text>
          <text transform="matrix(1 0 0 1 236.9933 93.4743)" className="st1 st2 b" dx="-3" dy="-6">к</text>
          <text transform="matrix(1 0 0 1 280.6080 75.4744)" className="st1" dx="-0.265625" dy="0">Е</text>
          <text transform="matrix(1 0 0 1 280.6080 93.4744)" className="st1 st2 b" dx="-4.835906982421875" dy="-6">е</text>
          <text transform="matrix(1 0 0 1 326.5138 75.4744)" className="st1" dx="-0.2421875" dy="0">Н</text>
          <text transform="matrix(1 0 0 1 326.5138 93.4744)" className="st1 st2 b" dx="-2.78125" dy="-6">н</text>
          <text transform="matrix(1 0 0 1 371.1386 75.4743)" className="st1" dx="1.2421875" dy="0">Г</text>
          <text transform="matrix(1 0 0 1 371.1386 93.4743)" className="st1 st2 b" dx="0.3125" dy="-6">г</text>
          <text transform="matrix(1 0 0 1 418.5557 75.4743)" className="st1" dx="-5.515625" dy="0">Ш</text>
          <text transform="matrix(1 0 0 1 418.5557 93.4743)" className="st1 st2 b" dx="-9.1015625" dy="-6">ш</text>
          <text transform="matrix(1 0 0 1 459.9639 75.4743)" className="st1" dx="-1.375" dy="0">Щ</text>
          <text transform="matrix(1 0 0 1 459.9639 93.4743)" className="st1 st2 b" dx="-6.523406982421875" dy="-6">щ</text>
          <text transform="matrix(1 0 0 1 506.9335 75.4743)" className="st1" dx="0.5390625" dy="0">З</text>
          <text transform="matrix(1 0 0 1 506.9335 93.4743)" className="st1 st2 b" dx="-1.062530517578125" dy="-6">з</text>
          <text transform="matrix(1 0 0 1 112.1346 120.3303)" className="st1" dx="-0.5703125" dy="0">Ф</text>
          <text transform="matrix(1 0 0 1 112.1346 138.3303)" className="st1 st2 b" dx="-6.3359375" dy="-6">ф</text>
          <text transform="matrix(1 0 0 1 156.0135 120.3303)" className="st1" dx="-1.890625" dy="0">Ы</text>
          <text transform="matrix(1 0 0 1 156.0135 138.3303)" className="st1 st2 b" dx="-5.2734375" dy="-6">ы</text>
          <text transform="matrix(1 0 0 1 201.5241 120.3303)" className="st1" dx="0.476593017578125" dy="0">В</text>
          <text transform="matrix(1 0 0 1 201.5241 138.3303)" className="st1 st2 b" dx="-2.1484375" dy="-6">в</text>
          <text transform="matrix(1 0 0 1 247.1121 120.3303)" className="st1" dx="-0.71875" dy="0">А</text>
          <text transform="matrix(1 0 0 1 247.1121 138.3303)" className="st1 st2 b" dx="-5" dy="-6">а</text>
          <text transform="matrix(1 0 0 1 289.4753 120.3303)" className="st1" dx="0.515625" dy="0">П</text>
          <text transform="matrix(1 0 0 1 289.4753 138.3303)" className="st1 st2 b" dx="-2.3046875" dy="-6">п</text>
          <text transform="matrix(1 0 0 1 335.5886 120.3303)" className="st1" dx="0.4765625" dy="0">Р</text>
          <text transform="matrix(1 0 0 1 335.5886 138.3303)" className="st1 st2 b" dx="-2.5234375" dy="-6">р</text>
          <text transform="matrix(1 0 0 1 382.2692 120.3303)" className="st1" dx="-2.40625" dy="0">О</text>
          <text transform="matrix(1 0 0 1 382.2692 138.3303)" className="st1 st2 b" dx="-4.9140625" dy="-6">о</text>
          <text transform="matrix(1 0 0 1 426.0182 120.3303)" className="st1" dx="0.328155517578125" dy="0">Л</text>
          <text transform="matrix(1 0 0 1 426.0182 138.3303)" className="st1 st2 b" dx="-3.25" dy="-6">л</text>
          <text transform="matrix(1 0 0 1 470.8706 120.3303)" className="st1" dx="-1" dy="0">Д</text>
          <text transform="matrix(1 0 0 1 470.8706 138.3303)" className="st1 st2 b" dx="-5.828125" dy="-6">д</text>
          <text transform="matrix(1 0 0 1 134.7896 163.7458)" className="st1" dx="-0.742218017578125" dy="0">Я</text>
          <text transform="matrix(1 0 0 1 134.7896 181.7458)" className="st1 st2 b" dx="-2.796875" dy="-6">я</text>
          <text transform="matrix(1 0 0 1 179.2339 163.7458)" className="st1" dx="0.234375" dy="0">Ч</text>
          <text transform="matrix(1 0 0 1 179.2339 181.7458)" className="st1 st2 b" dx="-2.3125" dy="-6">ч</text>
          <text transform="matrix(1 0 0 1 222.5416 163.7458)" className="st1" dx="0" dy="0">С</text>
          <text transform="matrix(1 0 0 1 222.5416 181.7458)" className="st1 st2 b" dx="-2" dy="-6">с</text>
          <text transform="matrix(1 0 0 1 269.3973 163.7458)" className="st1" dx="-1.203125" dy="0">М</text>
          <text transform="matrix(1 0 0 1 269.3973 181.7458)" className="st1 st2 b" dx="-4.8046875" dy="-6">м</text>
          <text transform="matrix(1 0 0 1 314.0098 163.7458)" className="st1" dx="-0.4453125" dy="0">И</text>
          <text transform="matrix(1 0 0 1 314.0098 181.7458)" className="st1 st2 b" dx="-2.562469482421875" dy="-6">и</text>
          <text transform="matrix(1 0 0 1 358.4863 163.7458)" className="st1" dx="0.7421875" dy="0">Т</text>
          <text transform="matrix(1 0 0 1 358.4863 181.7458)" className="st1 st2 b" dx="-1.1875" dy="-6">т</text>
          <text transform="matrix(1 0 0 1 401.6816 163.7458)" className="st1" dx="1.53125" dy="0">Ь</text>
          <text transform="matrix(1 0 0 1 401.6816 181.7458)" className="st1 st2 b" dx="0.390625" dy="-6">ь</text>
          <text transform="matrix(1 0 0 1 519.074 136.7127)" className="st1 st2 b" dx="-6.625" dy="-5">ж</text>
          <text transform="matrix(1 0 0 1 519.074 119.3763)" className="st1" dx="-5.59375" dy="2">Ж</text>
          <text transform="matrix(1 0 0 1 451.3285 180.0409)" className="st1 st2 b" dx="-5.1796875" dy="-3">б</text>
          <text transform="matrix(1 0 0 1 450.2827 164.3396)" className="st1" dx="-0.625" dy="0">Б</text>
          <text transform="matrix(1 0 0 1 495.9731 181.0409)" className="st1 st2 b" dx="-7.8359375" dy="-3">ю</text>
          <text transform="matrix(1 0 0 1 494.9274 164.3396)" className="st1" dx="-3.6875" dy="0">Ю</text>
          <text transform="matrix(1 0 0 1 543.4077 181.0408)" className="st1 st2" dx="0" dy="0">/</text>
          <text transform="matrix(1 0 0 1 541.3276 163.2498)" className="st1 st2" dx="0" dy="0">?</text>
          <text transform="matrix(1 0 0 1 565.621 138.7127)" className="st1 st2 b" dx="-4.9921875" dy="-7">э</text>
          <text transform="matrix(1 0 0 1 565.621 120.3763)" className="st1" dx="-3.140625" dy="0">Э</text>
          <text transform="matrix(1 0 0 1 553.3923 94.426)" className="st1 st2 b" dx="-4" dy="-7">х</text>
          <text transform="matrix(1 0 0 1 552.9709 74.8769)" className="st1" dx="-3.00006103515625" dy="0">Х</text>
          <text transform="matrix(1 0 0 1 598.7657 94.426)" className="st1 st2 b" dx="-5.9609375" dy="-7">ъ</text>
          <text transform="matrix(1 0 0 1 598.3443 74.7849)" className="st1" dx="-3.84375" dy="0">Ъ</text>
          <text transform="matrix(1 0 0 1 644.3574 96.8807)" className="st1 st2 b" dx="-4.83587646484375" dy="-9">ё</text>
          <text transform="matrix(1 0 0 1 644.4941 74.8769)" className="st1" dx="-3.5234375" dy="0">Ё</text>
          <text id="text-tab" transform="matrix(1 0 0 1 23.3467 93.2342)" className="st1 s st2">tab</text>
          <text id="text-caps-lock" transform="matrix(1 0 0 1 23.3467 137.7127)" className="st1 s st2">caps lock</text>
          <text id="text-shift-left" transform="matrix(1 0 0 1 23.3467 181.0408)" className="st1 s st2">shift</text>
          <text id="text-shift-right" transform="matrix(1 0 0 1 641.826 180.0408)" className="st1 s st2">shift</text>
          <text id="text-backspace" transform="matrix(1 0 0 1 606.4653 51.1765)" className="st1 s st2">backspace</text>
          <text id="text-enter" transform="matrix(1 0 0 1 636.3144 137.7128)" className="st1 s st2">enter</text>
          <text id="text-control" transform="matrix(1 0 0 1 23.3467 232.465)" className="st1 s st2">control </text>
          <text id="text-option-left" transform="matrix(1 0 0 1 129.2338 231.4646)" className="st1 s st2">option</text>
          <text id="text-space" transform="matrix(1 0 0 1 199.7899 232.4646)" className="st1 s st2">space</text>
          <text id="text-option-right" transform="matrix(1 0 0 1 483.8864 231.4646)" className="st1 s st2">option</text>
        </g>,
      ],
    en:
      [
        <g id="keys" key={randomIterableKey()}>
          <path id="tilda" className="st0" d="M58.4,53.7c0,1.7-1.4,3-3,3H18.9c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"></path>
          <path id="key-1" className="st0" d="M103.4,53.7c0,1.7-1.3,3-3,3H63.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="q" className="st0" d="M126.7,97.6c0,1.6-1.3,3-3,3H87.2c-1.7,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="a" className="st0" d="M137.4,141.5c0,1.6-1.4,3-3,3H97.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="z" className="st0" d="M160.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V185.4z"></path>
          <path id="x" className="st0" d="M205.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="c" className="st0" d="M250.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="v" className="st0" d="M295.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="b" className="st0" d="M340.8,185.4c0,1.7-1.4,3-3,3h-36.6c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.6c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="n" className="st0" d="M385.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="m" className="st0" d="M430.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="comma" className="st0" d="M475.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z"></path>
          <path id="dot" className="st0" d="M520.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z"></path>
          <path id="slash" className="st0" d="M565.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z"></path>
          <path id="s" className="st0" d="M182.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="d" className="st0" d="M227.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="f" className="st0" d="M272.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="g" className="st0" d="M317.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="h" className="st0" d="M362.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="j" className="st0" d="M407.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="k" className="st0" d="M452.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="l" className="st0" d="M497.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="semicolon" className="st0" d="M542.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="quote" className="st0" d="M587.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z"></path>
          <path id="w" className="st0" d="M171.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="e" className="st0" d="M216.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V97.6z"></path>
          <path id="r" className="st0" d="M261.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="t" className="st0" d="M306.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="y" className="st0" d="M351.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="u" className="st0" d="M396.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="i" className="st0" d="M441.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="o" className="st0" d="M486.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z"></path>
          <path id="p" className="st0" d="M531.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="open-bracket" className="st0" d="M576.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="close-bracket" className="st0" d="M621.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="backslash" className="st0" d="M668.8,97.6c0,1.6-1.3,3-3,3h-38.6c-1.6,0-3-1.4-3-3V62.4c0-1.6,1.4-3,3-3h38.6c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="key-2" className="st0" d="M148.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"></path>
          <path id="key-3" className="st0" d="M193.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"></path>
          <path id="key-4" className="st0" d="M238.4,53.7c0,1.7-1.4,3-3,3H199c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"></path>
          <path id="key-5" className="st0" d="M283.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z"></path>
          <path id="key-6" className="st0" d="M328.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z"></path>
          <path id="key-7" className="st0" d="M373.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="key-8" className="st0" d="M418.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="key-9" className="st0" d="M463.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="key-0" className="st0" d="M508.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="minus" className="st0" d="M553.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z"></path>
          <path id="equal" className="st0" d="M598.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z"></path>
          <path id="backspace" className="st0" d="M668.8,53.7c0,1.7-1.3,3-3,3h-61.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h61.9c1.7,0,3,1.4,3,3V53.7z"></path>
          <path id="tab" className="st0" d="M81.7,97.6c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h59.8c1.7,0,3,1.4,3,3V97.6z"></path>
          <path id="capslock" className="st0" d="M92.4,141.5c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h70.4c1.7,0,3,1.3,3,3V141.5z"></path>
          <path id="enter" className="st0" d="M668.8,141.5c0,1.6-1.3,3-3,3h-72.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h72.9c1.7,0,3,1.3,3,3V141.5z"></path>
          <path id="shift-left" className="st0" d="M115.8,185.4c0,1.7-1.3,3-3,3H18.9c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h93.8c1.7,0,3,1.4,3,3V185.4z"></path>
          <path id="control" className="st0" d="M105,236c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-42c0-1.7,1.3-3,3-3H102c1.7,0,3,1.3,3,3V236z"></path>
          <path id="option-left" className="st0" d="M182.4,236c0,1.7-1.4,3-3,3h-68.8c-1.7,0-3-1.3-3-3v-42c0-1.7,1.3-3,3-3h68.8c1.6,0,3,1.3,3,3V236z"></path>
          <path id="option-right" className="st0" d="M531.8,191c1.7,0,3,1.4,3,3v42c0,1.7-1.3,3-3,3h-62.9c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H531.8z"></path>
          <path className="st0" d="M668.8,236.1c0,1.7-1.3,3-3,3H540.3c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3h125.5c1.7,0,3,1.4,3,3V236.1z"></path>
          <path id="space" className="st0" d="M460.4,191c1.6,0,3,1.4,3,3v42c0,1.7-1.4,3-3,3H187.5c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H460.4z"></path>
          <path id="shift-right" className="st0" d="M668.8,185.4c0,1.7-1.3,3-3,3h-94.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h94.5c1.7,0,3,1.4,3,3V185.4z"></path>
        </g>,
        <g id="letters" key={randomIterableKey()}>
          <text transform="matrix(1 0 0 1 33.4903 33.804)" className="st1 st2" dx="0" dy="0">~</text>
          <text transform="matrix(1 0 0 1 35.8009 52.6643)" className="st1 st2" dx="0" dy="0">`</text>
          <text transform="matrix(1 0 0 1 78.626 50.4071)" className="st1 st2" dx="0" dy="0">1</text>
          <text transform="matrix(1 0 0 1 123.299 51.1765)" className="st1 st2" dx="0" dy="0">2</text>
          <text transform="matrix(1 0 0 1 169.6841 51.404)" className="st1 st2" dx="0" dy="0">3</text>
          <text transform="matrix(1 0 0 1 213.0758 51.404)" className="st1 st2" dx="0" dy="0">4</text>
          <text transform="matrix(1 0 0 1 258.0724 51.404)" className="st1 st2" dx="0" dy="0">5</text>
          <text transform="matrix(1 0 0 1 303.2822 51.0891)" className="st1 st2" dx="0" dy="0">6</text>
          <text transform="matrix(1 0 0 1 349.5064 51.0891)" className="st1 st2" dx="0" dy="0">7</text>
          <text transform="matrix(1 0 0 1 393.281 51.2157)" className="st1 st2" dx="0" dy="0">8</text>
          <text transform="matrix(1 0 0 1 438.5742 51.2157)" className="st1 st2" dx="0" dy="0">9</text>
          <text transform="matrix(1 0 0 1 483.4907 51.2157)" className="st1 st2" dx="0" dy="0">0</text>
          <text transform="matrix(1 0 0 1 530.4011 50.4071)" className="st1 st2" dx="0" dy="0">-</text>
          <text transform="matrix(1 0 0 1 573.5195 51.2157)" className="st1 st2" dx="0" dy="0">=</text>
          <text transform="matrix(1 0 0 1 80.5513 31.7605)" className="st1 st2" dx="0" dy="0">!</text>
          <text transform="matrix(1 0 0 1 119.8565 30.45)" className="st1 st2" dx="0" dy="0">@</text>
          <text transform="matrix(1 0 0 1 169.6841 31.76)" className="st1 st2" dx="0" dy="0">#</text>
          <text transform="matrix(1 0 0 1 213.0758 31.2171)" className="st1 st2" dx="0" dy="0">$</text>
          <text transform="matrix(1 0 0 1 255.5748 30.8318)" className="st1 st2" dx="0" dy="0">%</text>
          <text transform="matrix(1 0 0 1 303.9556 32.4427)" className="st1 st2" dx="0" dy="0">^</text>
          <text transform="matrix(1 0 0 1 348.2554 31.76)" className="st1 st2" dx="0" dy="0">&amp;</text>
          <text transform="matrix(1 0 0 1 394.5334 32.8236)" className="st1 st2" dx="0" dy="0">*</text>
          <text transform="matrix(1 0 0 1 440.3076 30.6435)" className="st1 st2" dx="0" dy="0">(</text>
          <text transform="matrix(1 0 0 1 485.1645 30.6435)" className="st1 st2" dx="0" dy="0">)</text>
          <text transform="matrix(1 0 0 1 528.7588 25.5423)" className="st1 st2" dx="0" dy="0">_</text>
          <text transform="matrix(1 0 0 1 573.5195 32.4422)" className="st1 st2" dx="0" dy="0">+</text>
          <text transform="matrix(1 0 0 1 100.9088 75.4743)" className="st1" dx="0" dy="0">Q</text>
          <text transform="matrix(1 0 0 1 100.9088 93.4743)" className="st1 st2 b" dx="-2.0703125" dy="-6">q</text>
          <text transform="matrix(1 0 0 1 145.3644 75.4744)" className="st1" dx="0" dy="0">W</text>
          <text transform="matrix(1 0 0 1 145.3644 93.4744)" className="st1 st2 b" dx="-3" dy="-6">w</text>
          <text transform="matrix(1 0 0 1 190.5943 75.4744)" className="st1" dx="0" dy="0">E</text>
          <text transform="matrix(1 0 0 1 190.5943 93.4744)" className="st1 st2 b" dx="-2.0703125" dy="-6">e</text>
          <text transform="matrix(1 0 0 1 236.9933 75.4743)" className="st1" dx="0" dy="0">R</text>
          <text transform="matrix(1 0 0 1 236.9933 93.4743)" className="st1 st2 b" dx="-0.9921875" dy="-6">r</text>
          <text transform="matrix(1 0 0 1 280.6080 75.4744)" className="st1" dx="0" dy="0">T</text>
          <text transform="matrix(1 0 0 1 280.6080 93.4744)" className="st1 st2 b" dx="-0.500030517578125" dy="-6">t</text>
          <text transform="matrix(1 0 0 1 326.5138 75.4744)" className="st1" dx="0" dy="0">Y</text>
          <text transform="matrix(1 0 0 1 326.5138 93.4744)" className="st1 st2 b" dx="-1.515625" dy="-6">y</text>
          <text transform="matrix(1 0 0 1 371.1386 75.4743)" className="st1" dx="0" dy="0">U</text>
          <text transform="matrix(1 0 0 1 371.1386 93.4743)" className="st1 st2 b" dx="-2.0703125" dy="-6">u</text>
          <text transform="matrix(1 0 0 1 418.5557 75.4743)" className="st1" dx="0" dy="0">I</text>
          <text transform="matrix(1 0 0 1 418.5557 93.4743)" className="st1 st2 b" dx="-0.2265625" dy="-6">i</text>
          <text transform="matrix(1 0 0 1 459.9639 75.4743)" className="st1" dx="0" dy="0">O</text>
          <text transform="matrix(1 0 0 1 459.9639 93.4743)" className="st1 st2 b" dx="-2.0703125" dy="-6">o</text>
          <text transform="matrix(1 0 0 1 506.9335 75.4743)" className="st1" dx="0" dy="0">P</text>
          <text transform="matrix(1 0 0 1 506.9335 93.4743)" className="st1 st2 b" dx="-2.0703125" dy="-6">p</text>
          <text transform="matrix(1 0 0 1 112.1346 120.3303)" className="st1" dx="0" dy="0">A</text>
          <text transform="matrix(1 0 0 1 112.1346 138.3303)" className="st1 st2 b" dx="-2" dy="-6">a</text>
          <text transform="matrix(1 0 0 1 156.0135 120.3303)" className="st1" dx="0" dy="0">S</text>
          <text transform="matrix(1 0 0 1 156.0135 138.3303)" className="st1 st2 b" dx="-1.7578125" dy="-6">s</text>
          <text transform="matrix(1 0 0 1 201.5241 120.3303)" className="st1" dx="0" dy="0">D</text>
          <text transform="matrix(1 0 0 1 201.5241 138.3303)" className="st1 st2 b" dx="-2.0703125" dy="-6">d</text>
          <text transform="matrix(1 0 0 1 247.1121 120.3303)" className="st1" dx="0" dy="0">F</text>
          <text transform="matrix(1 0 0 1 247.1121 138.3303)" className="st1 st2 b" dx="-0.5" dy="-6">f</text>
          <text transform="matrix(1 0 0 1 289.4753 120.3303)" className="st1" dx="0" dy="0">G</text>
          <text transform="matrix(1 0 0 1 289.4753 138.3303)" className="st1 st2 b" dx="-2.070281982421875" dy="-6">g</text>
          <text transform="matrix(1 0 0 1 335.5886 120.3303)" className="st1" dx="0" dy="0">H</text>
          <text transform="matrix(1 0 0 1 335.5886 138.3303)" className="st1 st2 b" dx="-2.0703125" dy="-6">h</text>
          <text transform="matrix(1 0 0 1 382.2692 120.3303)" className="st1" dx="0" dy="0">J</text>
          <text transform="matrix(1 0 0 1 382.2692 138.3303)" className="st1 st2 b" dx="-0.2265625" dy="-6">j</text>
          <text transform="matrix(1 0 0 1 426.0182 120.3303)" className="st1" dx="0" dy="0">K</text>
          <text transform="matrix(1 0 0 1 426.0182 138.3303)" className="st1 st2 b" dx="-2" dy="-6">k</text>
          <text transform="matrix(1 0 0 1 470.8706 120.3303)" className="st1" dx="0" dy="0">L</text>
          <text transform="matrix(1 0 0 1 470.8706 138.3303)" className="st1 st2 b" dx="-0.2265625" dy="-6">l</text>
          <text transform="matrix(1 0 0 1 134.7896 163.7458)" className="st1" dx="0" dy="0">Z</text>
          <text transform="matrix(1 0 0 1 134.7896 181.7458)" className="st1 st2 b" dx="-1.7578125" dy="-6">z</text>
          <text transform="matrix(1 0 0 1 179.2339 163.7458)" className="st1" dx="0" dy="0">X</text>
          <text transform="matrix(1 0 0 1 179.2339 181.7458)" className="st1 st2 b" dx="-1.515625" dy="-6">x</text>
          <text transform="matrix(1 0 0 1 222.5416 163.7458)" className="st1" dx="0" dy="0">C</text>
          <text transform="matrix(1 0 0 1 222.5416 181.7458)" className="st1 st2 b" dx="-1.515625" dy="-6">c</text>
          <text transform="matrix(1 0 0 1 269.3973 163.7458)" className="st1" dx="0" dy="0">V</text>
          <text transform="matrix(1 0 0 1 269.3973 181.7458)" className="st1 st2 b" dx="-1.515594482421875" dy="-6">v</text>
          <text transform="matrix(1 0 0 1 314.0098 163.7458)" className="st1" dx="0" dy="0">B</text>
          <text transform="matrix(1 0 0 1 314.0098 181.7458)" className="st1 st2 b" dx="-2.0703125" dy="-6">b</text>
          <text transform="matrix(1 0 0 1 358.4863 163.7458)" className="st1" dx="0" dy="0">N</text>
          <text transform="matrix(1 0 0 1 358.4863 181.7458)" className="st1 st2 b" dx="-2.0703125" dy="-6">n</text>
          <text transform="matrix(1 0 0 1 401.6816 163.7458)" className="st1" dx="0" dy="0">M</text>
          <text transform="matrix(1 0 0 1 401.6816 181.7458)" className="st1 st2 b" dx="-3.59375" dy="-6">m</text>
          <text transform="matrix(1 0 0 1 519.074 136.7127)" className="st1 st2" dx="0" dy="0">;</text>
          <text transform="matrix(1 0 0 1 519.074 119.3763)" className="st1 st2" dx="0" dy="0">:</text>
          <text transform="matrix(1 0 0 1 451.3285 180.0409)" className="st1 st2 b2" dx="-1.2578125" dy="0">,</text>
          <text transform="matrix(1 0 0 1 450.2827 164.3396)" className="st1 st2" dx="0" dy="0">&lt;</text>
          <text transform="matrix(1 0 0 1 495.9731 181.0409)" className="st1 st2 b2" dx="-1.2578125" dy="0">.</text>
          <text transform="matrix(1 0 0 1 494.9274 164.3396)" className="st1 st2" dx="0" dy="0">&gt;</text>
          <text transform="matrix(1 0 0 1 543.4077 181.0408)" className="st1 st2" dx="0" dy="0">/</text>
          <text transform="matrix(1 0 0 1 541.3276 163.2498)" className="st1 st2" dx="0" dy="0">?</text>
          <text transform="matrix(1 0 0 1 565.621 138.7127)" className="st1 st2" dx="0" dy="0">&apos;</text>
          <text transform="matrix(1 0 0 1 565.621 120.3763)" className="st1 st2" dx="0" dy="0">&quot;</text>
          <text transform="matrix(1 0 0 1 553.3923 94.426)" className="st1 st2" dx="0" dy="0">[</text>
          <text transform="matrix(1 0 0 1 552.9709 74.8769)" className="st1 st2" dx="0" dy="0">&#123;</text>
          <text transform="matrix(1 0 0 1 598.7657 94.426)" className="st1 st2" dx="0" dy="0">]</text>
          <text transform="matrix(1 0 0 1 598.3443 74.7849)" className="st1 st2" dx="0" dy="0">&#125;</text>
          <text transform="matrix(1 0 0 1 644.3574 96.8807)" className="st1 st2" dx="0" dy="0">\</text>
          <text transform="matrix(1 0 0 1 644.4941 74.8769)" className="st1 st2" dx="0" dy="0">|</text>
          <text id="text-tab" transform="matrix(1 0 0 1 23.3467 93.2342)" className="st1 s st2">tab</text>
          <text id="text-caps-lock" transform="matrix(1 0 0 1 23.3467 137.7127)" className="st1 s st2">caps lock</text>
          <text id="text-shift-left" transform="matrix(1 0 0 1 23.3467 181.0408)" className="st1 s st2">shift</text>
          <text id="text-shift-right" transform="matrix(1 0 0 1 641.826 180.0408)" className="st1 s st2">shift</text>
          <text id="text-backspace" transform="matrix(1 0 0 1 606.4653 51.1765)" className="st1 s st2">backspace</text>
          <text id="text-enter" transform="matrix(1 0 0 1 636.3144 137.7128)" className="st1 s st2">enter</text>
          <text id="text-control" transform="matrix(1 0 0 1 23.3467 232.465)" className="st1 s st2">control </text>
          <text id="text-option-left" transform="matrix(1 0 0 1 129.2338 231.4646)" className="st1 s st2">option</text>
          <text id="text-space" transform="matrix(1 0 0 1 199.7899 232.4646)" className="st1 s st2">space</text>
          <text id="text-option-right" transform="matrix(1 0 0 1 483.8864 231.4646)" className="st1 s st2">option</text>
        </g>,
      ],
  };

  const hideShowKeyboardBtn = langsData[lang].pageGame.hideShowKeyboardBtn as string;
  const keyLangBtn = langsData[lang].pageGame.keyLangBtn as { ru: string, en: string };

  const [showKeyboard, setShowKeyboard] = useState(true);

  const onClicksHideShowKeyboardBtnHandler = () => setShowKeyboard(!showKeyboard);
  const onClicksKeyLangBtnHandler = () => {
    setIdx(-1);
    keyLang === 'ru' ? setKeyLang('en') : setKeyLang('ru');
  };

  const setKeyboard = (keys: JSX.Element[], letters: JSX.Element[]) => (
    <svg className="standard-kb" viewBox="0 0 683.3 254" xmlns="http://www.w3.org/2000/svg">
      <g id="keys" key={randomIterableKey()}>
        {[...keys]}
      </g>
      <g id="letters" key={randomIterableKey()}>
        {[...letters]}
      </g>
    </svg>
  );

  const setNewKeyboard = (nextLetter: string) => {
    let nextKey = nextLetter;
    if (nextLetter === ' ') { nextLetter = 'space'; nextKey = 'space'; }
    else if (nextLetter === ',') { nextKey = keyLang === 'en' ? 'comma' : 'slash'; }
    else if (nextLetter === '.') { nextKey = keyLang === 'en' ? 'dot' : 'slash'; }
    else if (nextLetter === '`') { nextKey = 'tilda'; }
    else if (nextLetter === '!') { nextKey = 'key-1'; }
    else if (nextLetter === '?') { nextKey = 'slash'; }
    else if (nextLetter === '-') { nextKey = 'minus'; }
    else if (nextLetter === '/') { nextKey = 'slash'; }
    else if (nextLetter === '~') { nextKey = 'tilda'; }
    else if (nextLetter === ':') { nextKey = keyLang === 'en' ? 'semicolon' : 'key-6'; }
    else if (nextLetter === ';') { nextKey = keyLang === 'en' ? 'semicolon' : 'key-4'; }
    else if (nextLetter === '"') { nextKey = keyLang === 'en' ? 'quote' : 'key-2'; }
    else if (nextLetter === '=') { nextKey = 'equal'; }
    else if (nextLetter === '{') { nextKey = 'open-bracket'; }
    else if (nextLetter === '\\') { nextKey = 'backslasht'; }

    const isUpperCase = nextLetter.toUpperCase() === nextLetter;

    const keys: JSX.Element[] = keyboardKeys[keyLang][0].props.children;
    const curKey: { key: JSX.Element, idx: number, up: boolean } = keys.reduce((acc, el, i) => {
      if (el.props.id === nextKey || el.props.id === nextKey.toLocaleLowerCase()) {
        acc.up = isUpperCase;
        acc.key = el;
        acc.idx = i;
      }
      return acc;
    }, {} as { key: JSX.Element, idx: number, up: boolean });

    const letters: JSX.Element[] = keyboardKeys[keyLang][1].props.children;
    const curLetter: { key: JSX.Element, idx: number, up: boolean } = letters.reduce((acc, el, i) => {
      const letter = el.props.children ? el.props.children : el.props.id.slice(5);
      if (letter === nextLetter || letter === nextLetter.toLocaleLowerCase()) {
        acc.up = isUpperCase;
        acc.key = el;
        acc.idx = i;
      }
      return acc;
    }, {} as { key: JSX.Element, idx: number, up: boolean });


    const keysBefore = keys.slice(0, curKey.idx);
    const keysAfter = keys.slice(curKey.idx + 1);
    const lettersBefore = letters.slice(0, curLetter.idx);
    const lettersAfter = letters.slice(curLetter.idx + 1);


    const newActiveKey: JSX.Element = React.createElement(
      curKey.key.type,
      { ...curKey.key.props, className: `${curKey.key.props.className} active`, key: randomIterableKey() },
    );

    const newActiveLetter: JSX.Element = React.createElement(
      curLetter.key.type,
      { ...curLetter.key.props, className: `${curLetter.key.props.className} active`, key: randomIterableKey() },
      curLetter.key.props.children,
    );

    return setKeyboard([...keysBefore, newActiveKey, ...keysAfter], [...lettersBefore, newActiveLetter, ...lettersAfter]);
  };

  let keyboard = setKeyboard(keyboardKeys[keyLang][0].props.children, keyboardKeys[keyLang][1].props.children);

  if ((char && isRightKey) || idx === -1) {
    keyboard = setNewKeyboard(char);
  }

  if (!isRightKey && idx !== -1) {
    keyboard = setNewKeyboard('backspace');
  }

  return (
    <div className={styles.Keyboard}>
      <div className={styles.switchButtons}>

        <button
          type="button"
          className={styles.hideShowKeyboardBtn}
          onClick={onClicksHideShowKeyboardBtnHandler}
        >
          <RiKeyboardFill className={styles.btnIcons} />
          {hideShowKeyboardBtn}
        </button>

        <button
          type="button"
          className={styles.hideShowKeyboardBtn}
          onClick={onClicksKeyLangBtnHandler}
        >
          <RiTranslate className={styles.btnIcons} />
          {keyLangBtn[keyLang]}
        </button>

      </div>

      <div className={showKeyboard ? styles.keyboardImg__active : styles.keyboardImg}>
        {keyboard}
      </div>

    </div>
  );
}
