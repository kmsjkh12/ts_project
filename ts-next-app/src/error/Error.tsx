'use client'; // Error 컴포넌트는 반드시 클라이언트 컴포넌트여야 함

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
//여기다 폴백 작성
export default function Error({ error, reset }) {

    const router = useRouter();

    const onClickMove =()=>{
    }
  useEffect(() => {
    console.log(error);
  }, [error]);
  
  return (
    <div>
      <h2>에러 알림</h2>
      <Link  href="/login">
      <button 
       
      >
        다시 시도하기
      </button>
      </Link>
    </div>
  );
}