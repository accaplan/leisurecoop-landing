import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header({ logoWhite, menuWhite, isMenu, logoBlack, menuBlack, isClose }) {
  let logoColorTheme = ''
  let menuColorTheme = ''

  if (logoWhite) {
    logoColorTheme = 'text-white'
  } else if (logoBlack) {
    logoColorTheme = 'text-black'
  }

  if (menuWhite) {
    menuColorTheme = 'text-white'
  } else if (logoBlack) {
    menuColorTheme = 'text-black'
  }
  
  const router = useRouter()

  return (
    <header className="absolute top-0 w-full left-0 right-0 z-[100] my-[32px] lg:my-[64px] lg:fixed text-white mix-blend-difference">
      <Container>
        <div className="flex flex-wrap items-center justify-between text-white mix-blend-difference">
          <Link href="/">
            <a className={`inline-block h-full w-[180px] lg:w-[219px] transition-colors ease-in-out duration-300 mix-blend-difference text-white`}>
              <svg className="w-full text-white" viewBox="0 0 275.3 21.29" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fillRule="evenodd"><path d="M0,.29H3.74v14H13.5v2.31H0Z"/><path class="cls-1" d="M22.41,14.57c3.19,0,3.21-2.69,3.21-2.69l3.36.87s-.88,4.13-6.93,4.13c-3.76,0-7.08-2.16-7.08-6.11,0-3.46,2.73-6.09,7.08-6.09,6.57,0,6.93,4.85,6.61,6.51L18.46,11C18.48,12.79,19.57,14.57,22.41,14.57ZM22,6.89a3.15,3.15,0,0,0-3.32,2.45l6.4-.21A2.8,2.8,0,0,0,22,6.89Z"/><path class="cls-1" d="M32.13.29h3.46V3H32.13Zm0,4.67h3.46V16.61H32.13Z"/><path class="cls-1" d="M45.34,14.57c1.38,0,2.58-.4,2.58-1.22s-.71-1.07-2.35-1.36l-2.73-.5c-1.85-.34-3.93-1.05-3.93-3.18,0-2.31,2.44-3.63,5.5-3.63,5.82,0,6.3,3.4,6.3,3.4l-3.36.86s-.1-2-3.08-2c-1.47,0-2.15.63-2.15,1.21S43,9,44.35,9.22l2.94.48c2.94.48,4.05,1.83,4.05,3.55,0,2.37-2.69,3.63-6.05,3.63-6.69,0-7-4.07-7-4.07L41.68,12S41.66,14.57,45.34,14.57Z"/><path class="cls-1" d="M57.52,12.26c0,1.56,1.09,2.31,3,2.31A3.62,3.62,0,0,0,63.94,12V5h3.47V16.61h-2l-1-3.3s-.25,3.57-4.87,3.57c-3.86,0-5.46-1.83-5.46-4.79V5h3.45Z"/><path class="cls-1" d="M74.65,16.61H71.19V5h2l1,3.29s0-3.57,3.34-3.57c2.41,0,3.13,1.41,3.13,3.05A7.11,7.11,0,0,1,80.38,10L77,10.81A10.65,10.65,0,0,0,77.38,8c0-.86-.52-1-.92-1C75,7,74.65,9.53,74.65,9.53Z"/><path class="cls-1" d="M90,14.57c3.19,0,3.22-2.69,3.22-2.69l3.35.87s-.88,4.13-6.92,4.13c-3.76,0-7.08-2.16-7.08-6.11,0-3.46,2.73-6.09,7.08-6.09,6.57,0,6.92,4.85,6.61,6.51L86,11C86.06,12.79,87.15,14.57,90,14.57Zm-.42-7.68a3.14,3.14,0,0,0-3.31,2.45l6.4-.21A2.81,2.81,0,0,0,89.56,6.89Z"/><path class="cls-1" d="M124.11,8.17s.63-5.59-5.86-5.59c-4.08,0-6.18,2.44-6.18,5.86,0,3.61,2.48,5.86,6.18,5.86,6.4,0,6.32-4.79,6.32-4.79l3.84,1s-1,6.38-10.16,6.38c-6,0-10.06-3.55-10.06-8.44S112.12,0,118.23,0C128,0,128,7.12,128,7.12Z"/><path class="cls-1" d="M137.92,4.68c4.56,0,7.25,2.69,7.25,6.09s-2.69,6.11-7.25,6.11-7.2-2.69-7.2-6.11S133.41,4.68,137.92,4.68Zm0,9.89c2.69,0,3.62-1.89,3.62-3.8S140.61,7,137.92,7s-3.56,1.87-3.56,3.78S135.22,14.57,137.92,14.57Z"/><path class="cls-1" d="M154.89,4.68c4.56,0,7.25,2.69,7.25,6.09s-2.69,6.11-7.25,6.11-7.2-2.69-7.2-6.11S150.38,4.68,154.89,4.68Zm0,9.89c2.69,0,3.61-1.89,3.61-3.8S157.58,7,154.89,7s-3.57,1.87-3.57,3.78S152.18,14.57,154.89,14.57Z"/><path class="cls-1" d="M168.75,21.29h-3.46V5h2l.8,2.66a4.89,4.89,0,0,1,4.79-2.94A5.9,5.9,0,0,1,179,10.77a5.91,5.91,0,0,1-6.13,6.11c-3.25,0-4.16-2.14-4.16-2.14Zm-.54-10.52c0,1.93,1,3.8,3.57,3.8s3.63-1.68,3.63-3.8S174.28,7,171.78,7,168.21,8.84,168.21,10.77Z"/><path class="cls-1" d="M189,14.57c3.19,0,3.21-2.69,3.21-2.69l3.36.87s-.88,4.13-6.93,4.13c-3.76,0-7.08-2.16-7.08-6.11,0-3.46,2.73-6.09,7.08-6.09,6.57,0,6.93,4.85,6.61,6.51L185.05,11C185.07,12.79,186.16,14.57,189,14.57Zm-.42-7.68a3.15,3.15,0,0,0-3.32,2.45l6.4-.21A2.8,2.8,0,0,0,188.58,6.89Z"/><path class="cls-1" d="M202.19,16.61h-3.47V5h2l1,3.29s0-3.57,3.34-3.57c2.42,0,3.13,1.41,3.13,3.05a7.36,7.36,0,0,1-.27,2.22l-3.36.86A10.38,10.38,0,0,0,204.92,8c0-.86-.53-1-.93-1-1.47,0-1.8,2.54-1.8,2.54Z"/><path class="cls-1" d="M222.78,14.57a2.13,2.13,0,0,0,1.58-1.05l.69,2.27a3.85,3.85,0,0,1-2.79,1.09c-2.5,0-3.13-1.59-3.13-3.95-.1.19-2.08,3.95-5.69,3.95-2.14,0-3.44-1-3.44-2.77,0-1.95,2.29-4.2,8.67-4.75,0-1.07-.25-2.37-2.39-2.37-3.2,0-3.22,2.58-3.22,2.58l-3.61-.92s1.11-4,7-4c3.78,0,5.78,2,5.69,4.39l-.19,4.35C221.92,14.07,222.15,14.57,222.78,14.57Zm-7.95,0c2.43,0,3.84-3.27,3.84-3.27v-.82c-3.82.35-5.06,1.8-5.06,2.92C213.61,13.9,213.78,14.57,214.83,14.57Z"/><path class="cls-1" d="M225.05,5h2.78V2.67l3.34-2.1V5h5.35V7h-5.35v5.29c0,1.43.56,2.29,2.05,2.29A3.39,3.39,0,0,0,236,12.89l.68,2.27a5.74,5.74,0,0,1-4.39,1.72c-2.82,0-4.54-1.34-4.54-4.34V7h-2.69Z"/><path class="cls-1" d="M239,.29h3.46V3H239ZM239,5h3.46V16.61H239Z"/><path class="cls-1" d="M253.87,16.61h-3.36L244.54,5h3.8l3.85,8.58L256,5h3.8Z"/><path class="cls-1" d="M268.73,14.57c3.19,0,3.22-2.69,3.22-2.69l3.35.87s-.88,4.13-6.92,4.13c-3.76,0-7.08-2.16-7.08-6.11,0-3.46,2.73-6.09,7.08-6.09,6.57,0,6.92,4.85,6.61,6.51L264.79,11C264.81,12.79,265.9,14.57,268.73,14.57Zm-.42-7.68A3.14,3.14,0,0,0,265,9.34l6.4-.21A2.81,2.81,0,0,0,268.31,6.89Z"/></g></svg>
            </a>
          </Link>

          <nav>
            {isClose ? (
              <button className="uppercase 2xl:text-[1.1rem]  group block relative z-10 duration-[450ms] border border-white hover:border-[#F8FF81] border-opacity-20 p-2 mix-blend-normal hover:border-opacity-100" onClick={() => router.back()}>
                <span className="block overflow-hidden relative">
                    <span>
                      <svg className="block w-3 " xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 378.303 378.303"><path fill="currentColor" d="M378.303 28.285 350.018 0 189.151 160.867 28.285 0 0 28.285l160.867 160.866L0 350.018l28.285 28.284 160.866-160.866 160.867 160.866 28.285-28.284-160.867-160.867z"/></svg>
                    </span>
                </span>
              </button>
            ) : (
              <>
              {isMenu ? (
                <button className="uppercase text-white mix-blend-difference 2xl:text-[1.1rem] hover:outline-none focus:outline-none group" onClick={() => router.back()}>
                  <span className="block overflow-hidden relative">
                      <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Close</span>
                      <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full underline">Close</span>
                  </span>
                </button>
              ) : (
                <FancyLink destination={`/menu`} a11yText={`Open Menu`} label={'Menu'} extraClasses={`uppercase text-white mix-blend-difference 2xl:text-[1.1rem]`}/>  
              )}
              </>
            )}
            
          </nav>
        </div>       
      </Container>
    </header>
  )
}