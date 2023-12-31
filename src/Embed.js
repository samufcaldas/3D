import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Início', href: '#' },
  { name: 'Episódios', href: '#' },
  { name: 'Grande final', href: '#' },
]

export default function Example() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-gray-900 pt-6 p-4">
          <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-6" aria-label="Global">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full">
                <a href="#">
                  <span className="sr-only">Rocket</span>
                  <img className="w-auto h-10" src="img/logo-rocket.svg" alt="" />
                </a>
                <div className="-mr-2 flex items-center">
                  <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                INSCREVA-SE
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-4 transition transform origin-top">
            <div className="rounded-3xl shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="img/logo-rocket-rosa.svg" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Fechar</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a href="#" className="block text-center w-full py-3 px-4 rounded-md shadow bg-pink-700 text-white font-medium hover:bg-pink-600">
                    INSCREVA-SE PARA 2024
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-10 bg-gray-900 pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="">
              <div className="mx-auto max-w-md px-4 max-w-2xl px-6 text-center">
                <div className="">
                  <a href="#" className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 text-base hover:text-gray-200">
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-pink-700 rounded-full">Rocket 2024</span>
                    <span className="ml-4 text-sm">Inscreva sua startup agora</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white mt-5 text-6xl">
                    <span className="block">Garanta sua vaga para a</span>
                    <span className="block text-pink-600">sexta temporada</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 mt-5 text-xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
                  </p>
                  <div className="mt-10 mt-12">
                    <form action="#" className="max-w-xl mx-auto">
                      <button
                        type="submit"
                        className="block w-full py-3 px-3 rounded-md shadow bg-pink-700 text-white font-medium hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 focus:ring-offset-gray-900">
                        Inscreva-se aqui
                      </button>
                      <p className="mt-3 text-sm text-gray-300 mt-4">
                        Leia atentamente o{' '}
                        <a href="#" className="font-medium text-white">
                          regulamento
                        </a>{' '}
                        da próxima temporada.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-md px-4 max-w-2xl px-6" style={{ height: 220 }} />
          </div>
        </div>
      </main>
    </div>
  )
}
