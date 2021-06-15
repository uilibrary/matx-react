import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import Highlight from 'react-highlight'

const Display = () => {
    const classList = [
        {
            title: 'block',
            description: `<div className="block">display: block</div>`,
        },
        {
            title: 'hidden',
            description: `<div className="hidden">display: none</div>`,
        },
        {
            title: 'inline-block',
            description: `<div className="inline-block">display: inline-block</div>`,
        },
        {
            title: 'flex',
            description: `<div className="flex">display: flex</div>`,
        },
        {
            title: 'flex-column',
            description: `<div className="flex-column">display: flex; flex-direction: column</div>`,
        },
        {
            title: 'flex-wrap',
            description: `<div className="uppercase">flex-wrap: wrap</div>`,
        },
        {
            title: 'justify-start',
            description: `<div className="justify-start">justify-content: flex-start</div>`,
        },
        {
            title: 'justify-center',
            description: `<div className="justify-center">justify-content: center</div>`,
        },
        {
            title: 'justify-end',
            description: `<div className="justify-end">justify-content: flex-end</div>`,
        },
        {
            title: 'justify-between',
            description: `<div className="justify-between">justify-content: space-between</div>`,
        },
        {
            title: 'justify-around',
            description: `<div className="justify-around">justify-content: space-around</div>`,
        },
        {
            title: 'items-center',
            description: `<div className="items-center">align-items: center</div>`,
        },
        {
            title: 'items-start',
            description: `<div className="items-start">align-items: justify-start</div>`,
        },
        {
            title: 'items-end',
            description: `<div className="items-end">align-items: justify-end</div>`,
        },
        {
            title: 'items-stretch',
            description: `<div className="items-stretch">align-items: stretch</div>`,
        },
        {
            title: 'flex-grow',
            description: `<div className="flex-grow">flex-grow: 1</div>`,
        },
        {
            title: 'hide-on-mobile',
            description: `<div className="hide-on-mobile">
      screen size below 768px:: display: none
      screen size over 768px:: display: inherit
      </div>`,
        },
        {
            title: 'hide-on-pc',
            description: `<div className="hide-on-pc">
      screen size below 1200px:: display: inherit
      screen size over 1200px:: display: none
      </div>`,
        },
        {
            title: 'show-on-pc',
            description: `<div className="show-on-pc">
      screen size below 1200px:: display: none
      </div>`,
        },
    ]

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Utilities', path: '/utilities' },
                        { name: 'Display' },
                    ]}
                />
            </div>
            <SimpleCard title="display">
                <div className="py-2"></div>
                {classList.map((item) => (
                    <div
                        className="flex flex-wrap justify-between items-center"
                        key={item.title}
                    >
                        <code>.{item.title}</code>
                        <div className="highlight-js">
                            <Highlight className="html">
                                {item.description}
                            </Highlight>
                        </div>
                    </div>
                ))}
            </SimpleCard>
        </div>
    )
}

export default Display
