import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SanityPageService from '@/services/sanityPageService'

const query = `{
  "clients": *[_type == "clients"] | order(title) {
    title,
    logo {
      asset ->
    },
    recent
  }
}`

const pageService = new SanityPageService(query)

export default function Clients(initialData) {
  const { data: { clients }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Partners" />

      <Header alwaysBlack />

      <LazyMotion features={domAnimation}>
        <div className="lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:min-h-screen bg-white">
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="py-32 lg:py-40 w-full"
          >
              <m.div variants={fade}>
                <Container>
                  <Tabs>
                    <TabList className="flex flex-wrap justify-center mb-8">
                      <Tab>
                        <button className="p-2 text-2xl lg:text-[32px] xs:p-4 font-display group">
                          <div className="overflow-hidden">
                            <m.div variants={reveal}>
                            <span className="block overflow-hidden relative">
                                <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Partners</span>
                                <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full ">Partners</span>
                            </span>
                            </m.div>
                          </div>
                        </button>
                      </Tab>
                      <Tab>
                        <button className="p-2 text-2xl lg:text-[32px] xs:p-4 font-display group">
                          <div className="overflow-hidden">
                            <m.div variants={reveal}>
                              <span className="block overflow-hidden relative">
                                <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Recent Projects</span>
                                <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full ">Recent Projects</span>
                            </span>
                            </m.div>
                          </div>
                        </button>
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <ul className="flex flex-wrap items-center justify-center">
                        {clients.map((client, i) => {
                          return !client.recent && (
                            <li key={i} className="w-1/2 p-8 xs:p-8 xs:w-1/2 md:p-8 lg:p-10 xl:p-8 2xl:p-16 md:w-[18%] lg:w-[18%] xl:w-[18%]">
                              <img src={client.logo.asset.url} alt={client.title} className="w-full" />
                            </li>
                          )
                        })}
                      </ul>
                    </TabPanel>

                    <TabPanel>
                     <ul className="flex flex-wrap items-center justify-center">
                      {clients.map((client, i) => {
                        return client.recent && (
                          <li key={i} className="w-1/2 p-12 xs:w-1/2 md:p-8 lg:p-10 xl:p-8 2xl:p-16 md:w-[23%] lg:w-[18%] xl:w-[18%]">
                            <img src={client.logo.asset.url} alt={client.title} className="w-full" />
                          </li>
                        )
                      })}
                      </ul>
                    </TabPanel>

                  </Tabs>

                  

                </Container>                  
                
              </m.div>
            
          </m.div>
        </div>
      </LazyMotion>
      
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}