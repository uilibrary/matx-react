import React, { useEffect, useState } from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import Highlight from 'react-highlight'

const HeightWidth = () => {
    const [sizeList, setSizeList] = useState([])
    const classList = [
        {
            title: 'w-20',
            description: `<div className="w-20">width: 20px</div>`,
        },
        {
            title: 'h-12',
            description: `<div className="h-12">height: 12px</div>`,
        },
        {
            title: 'w-full',
            description: `<div className="w-full">width: 100%</div>`,
        },
        {
            title: 'w-full-screen',
            description: `<div className="w-full-screen">width: 100vw</div>`,
        },
        {
            title: 'min-w-750',
            description: `<div className="min-w-750">min-width: 750px</div>`,
        },
        {
            title: 'max-w-750',
            description: `<div className="max-w-750">max-width: 750px</div>`,
        },
        {
            title: 'h-full',
            description: `<div className="h-full">height: 100%</div>`,
        },
        {
            title: 'h-full-screen',
            description: `<div className="h-full-screen">width: 100vh</div>`,
        },
        {
            title: 'h-150',
            description: `<div className="h-150">height: 150px</div>`,
        },
    ]
    useEffect(() => {
        let tempSizeList = []
        for (let i = 0; i <= 400; i += 4) {
            tempSizeList.push(i)
        }
        setSizeList(tempSizeList)
    }, [])

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Utilities', path: '/utilities' },
                        { name: 'Height Width' },
                    ]}
                />
            </div>
            <SimpleCard title="Height Width">
                <p className="m-0">
                    The classes are named using the format-
                    <code>(property)-(size)</code>
                </p>
                <p>
                    Where <em>property</em> is one of:
                </p>
                <ul>
                    <li>
                        <code>h</code> - for classes that set{' '}
                        <code>height</code>
                    </li>
                    <li>
                        <code>min-h</code> - for classes that set{' '}
                        <code>minimum height</code>
                    </li>
                    <li>
                        <code>max-h</code> - for classes that set{' '}
                        <code>maximum height</code>
                    </li>
                    <li>
                        <code>w</code> - for classes that set <code>width</code>
                    </li>
                    <li>
                        <code>min-w</code> - for classes that set{' '}
                        <code>minimum width</code>
                    </li>
                    <li>
                        <code>max-w</code> - for classes that set{' '}
                        <code>maximum width</code>
                    </li>
                </ul>
                <p>
                    Where <em>size</em> is one of:
                </p>
                <ul>
                    <li>
                        <code className="whitespace-pre-wrap">
                            [{sizeList.toString()}]
                        </code>
                    </li>
                </ul>

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

export default HeightWidth
