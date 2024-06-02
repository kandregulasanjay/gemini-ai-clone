import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { Context } from '../../context/context';

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt='user icon' />
            </div>
            <div className="main-container">
                {!showResult
                    ?
                    <>
                        <div className="greet">
                            <p><span>Hello,Sanjay</span></p>
                            <p>How can i help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Sugget best developer tools in the present technology.</p>
                                <img src={assets.code_icon} />
                            </div>
                            <div className="card">
                                <p>Show me a adrees of hyderabad to kukatpally.</p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className="card">
                                <p>write a email to my friend discribe about corona.</p>
                                <img src={assets.message_icon} />
                            </div>
                            <div className="card">
                                <p>Give me a business ideas of well settled in market. </p>
                                <img src={assets.bulb_icon} />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter the prompt' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ?<img onClick={() => onSent()} src={assets.send_icon}/>:null}
                        </div>
                    </div>
                    <p className='bottom-info'>copy@right all righes are reserved by the @whatsapp alonMask</p>
                </div>
            </div>
        </div>
    )
}

export default Main