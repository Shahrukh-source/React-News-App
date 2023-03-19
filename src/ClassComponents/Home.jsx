import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem';


export default function Home(props) {
    var [articles, setarticles] = useState([])
    var [totalResults, settotalResults] = useState(0)
    var [page, setpage] = useState(1)
    const getAPIData = async () => {
        var response = ""
        if (props.search)
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=1&pageSize=20&language=${props.language}&apiKey=bc766c9253d547b18d4d031714268645`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=1&pageSize=20&language=${props.language}&apiKey=bc766c9253d547b18d4d031714268645`)
        var result = await response.json()
        setarticles(result.articles)
        settotalResults(result.totalResults)

    }
    const fetchMoreData = async () => {
        setpage(page+1)
        var response = ""
        if (props.search)
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&pageSize=20&language=${props.language}&apiKey=bc766c9253d547b18d4d031714268645`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=20&language=${props.language}&apiKey=bc766c9253d547b18d4d031714268645`)
        var result = await response.json()
        setarticles(articles.concat(result.articles))


    }
    useEffect(() => {
        getAPIData()
    }, [props])
    return (
        <>
            <div className="container-fluid mt-2">
                <InfiniteScroll
                    dataLength={state.articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={
                        <div className='my-5 text-center'>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                >
                    <div className="row">
                        <h5 className='bg-danger text-center p-2 '>{props.q} News Section</h5>
                        {
                            state.articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    pic={item.urlToImage}
                                    title={item.title}
                                    description={item.description}
                                    source={item.source.name}
                                    date={item.publishedAt}
                                    url={item.url}
                                />
                            })
                        }

                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
}


