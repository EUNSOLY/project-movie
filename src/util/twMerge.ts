import { ClassValue, clsx } from 'clsx'; // 조건부 className을 처리하기 위해서 사용
import { twMerge } from 'tailwind-merge'; // className의 경우 마지막에 선언된 className 기준 오버라이드

// NOTE : 충돌 방지를 위한 위 2가지 라이브러리 사용 및 유틸모듈화
export const tm = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
