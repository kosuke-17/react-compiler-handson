'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  const onClick = () => {
    router.push('/')
  }

  return (
    <div className='h-screen'>
      <div className='h-full flex flex-col justify-center items-center'>
        ブラウザバック用のページ
        <button className='bg-gray-300 rounded-lg p-2' onClick={onClick}>
          ボタン
        </button>
      </div>
    </div>
  )
}
