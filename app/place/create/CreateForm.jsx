'use client';
import Link from 'next/link';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function CreateForm() {
  return (
    <form className="max-w-2xl mx-auto mt-4">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">



          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="col-span-full">
              <label htmlFor="place-name" className="block text-sm font-medium leading-6 text-gray-900">
              観光地
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="place-name"
                  id="place-name"
                  autoComplete="place-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="destination" className="block text-sm font-medium leading-6 text-gray-900">
              場所
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  autoComplete="destination"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="detail" className="block text-sm font-medium leading-6 text-gray-900">
              詳細な説明
              </label>
              <div className="mt-2">
                <textarea
                  id="detail"
                  name="detail"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

           

            <div className="col-span-full">
              <label htmlFor="food-photo" className="block text-sm font-medium leading-6 text-gray-900">
              観光地の動画・画像
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href="/place">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          キャンセル
          </button>
        </Link>

        <Link href="/place">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            作成
          </button>
        </Link>
      </div>
    </form>
  )
}
