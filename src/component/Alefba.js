import React, { useRef, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Alefba.css'
import './Rectangular.css'
import dataJson from './choose.json'
import './LottieAnimation'
import LottieAnimation from "./LottieAnimation";
function Alefba() {
    const data = dataJson
    // index the quastion
    const [indexid, setIndexid] = useState(0)
    // equation the line
    const [linevar, setLinevar] = useState(0)
    // 
    const [handelerOnClickCard, satHandelerOnClickCard] = useState(true)
    // to display the next button
    const [handelerAfterCheck, setHandelerAfterCheck] = useState(false)
    // to chang the quastion 
    const [text, setText] = useState(true)
    const [imgAndText, setImgAndText] = useState(false)
    const [img, setImg] = useState(false)
    const [sound, setSound] = useState(false)
    const [imgInQuastion, setImgInquastion] = useState(false)
    const [haveimg, setHaveimg] = useState(false)
    // 
    const [correct, setCorrect] = useState(false)
    const [correctIndex, setCorrectIndex] = useState(false)
    // true index after filter
    const [x, setX] = useState(null)
    // add the border after check
    const [y, setY] = useState(true)
    // to display the results page
    const [results, setResults] = useState(false)
    // To stop the function after verification
    const [Flag, setFlag] = useState(true)
    // the element in result page
    const [scoreFalse, setScoreFalse] = useState(0)
    const [scoreTrue, setScoreTrue] = useState(0)
    const [isQuastionTrue1, setIisQuastionTrue1] = useState(0);
    const [isQuastionTrue, setIisQuastionTrue] = useState(1);
    const [isQuastionFalse1, setIisQuastionFalse1] = useState(0);
    const [isQuastionFalse, setIisQuastionFalse] = useState(1);
    // const [is, setIs] = useState(true);

    // Chang the question
    function changeThePage() {

        merhaba()
        nextQuse()
        satHandelerOnClickCard(true)
        setHandelerAfterCheck(false)
        setY(true)
        setX(null)
        setFlag(true)
        let theText = data && data.body.questions[indexid + 1].data.answers[0].text
        let theImg = data && data.body.questions[indexid + 1].data.answers[0].image
        let theSound = data && data.body.questions[indexid + 1].data.answers[0].sound
        let theImgInQuastion = data && data.body.questions[indexid + 1].data.question.image
        let theTextInQuastion = data && data.body.questions[indexid + 1].data.question.text
        if (theImgInQuastion !== "") {
            setHaveimg(true)
        }
        else { setHaveimg(false) }
        if (theImgInQuastion === "" && theTextInQuastion === "") {

            if (theText !== "" && theImg === "" && theSound === "") {
                setText(true)
                setImgAndText(false)
                setImg(false)
                setSound(false)
                setImgInquastion(false)
            }
            else if (theText !== "" && theImg !== "" && theSound === "") {
                setImgAndText(true)
                setText(false)
                setImg(false)
                setSound(false)
                setImgInquastion(false)

            }
            else if (theText === "" && theImg !== "" && theSound === "") {
                setImg(true)
                setImgAndText(false)
                setText(false)
                setSound(false)
                setImgInquastion(false)

            }
            else if (theText === "" && theImg === "" && theSound !== "") {
                setSound(true)
                setImgAndText(false)
                setText(false)
                setImg(false)
                setImgInquastion(false)

            }
        }
        else {
            setSound(false)
            setImgAndText(false)
            setText(false)
            setImg(false)
            setImgInquastion(true)

        }

    }
    // to add one to index for chang page
    function nextQuestion(addone) {
        addone = indexid + 1
        if ((indexid + 1) < (data && data.body.questions.length)) {
            setIndexid(addone);
        }
        else {
            setResults(true)
        }
    }
    // for add color to linee
    function nextQuse() {
        nextQuestion()
        const theline = (100 * (indexid + 2)) / ((data && data.body.questions.length))
        setLinevar(theline)
        ifTrueorFalse()
    }
    const handelerKey = (indexe) => {
        const newQuestion = data && data.body.questions[indexid].data.answers.filter((todo) => todo.id !== indexe);
        setCorrect(newQuestion[indexe].correct)
        setX(indexe)
    };

    const addBointForScore = () => {
        setHandelerAfterCheck(true)
        setY(false)
        setFlag(false)
        if (correctIndex === true) {
            setScoreTrue(scoreTrue + 5)
        } else {
            setScoreFalse(scoreFalse + 5)
        }
    }


    const ifTrueorFalse = () => {
        if (correct) {
            setIisQuastionTrue(isQuastionTrue + 1)
            setIisQuastionTrue1((360 * (isQuastionTrue)) / (data.body.questions.length - 1))
        }
        else {
            setIisQuastionFalse(isQuastionFalse + 1)
            setIisQuastionFalse1((360 * (isQuastionFalse)) / (data.body.questions.length - 1))
        }
    }
    const [soundtrue, setSoundtrue] = useState(false)
    const quastionSound = () => {
        const audioElement = document.getElementById("sound");
        audioElement.play()
    }
    const outputSound = () => {
        const audioElement = document.getElementById("sounda");
        audioElement.play()
    }
    const merhaba = () => {
        if (data.body.questions[indexid + 1].data.question.sound !== "") {
            setSoundtrue(true)
        }
        else {
            setSoundtrue(false)
        }
    }
    const [end, setEnd] = useState(true)
    const [endTheSmallIcon, setEndTheSmallIcon] = useState(true)
    const [endTheIcon, setEndTheIcon] = useState(true)
    const audioRef = useRef(null);
    const playSound = (index) => {
        audioRef.current.src = data.body.questions[indexid].data.answers[index].sound;
        audioRef.current.play();
    };
    const [animation, setAnimation] = useState(true)
    return (<div className={animation ? "enimasion" : ""}>
        {results ? <div className="contaner">
            <div className="d-flex justify-content-between align-items-center mt-1 mt-md-5">
                <div className="  " onClick={() => {
                    setResults(false)
                }}  >
                    <button type="button  " className="btn-close" disabled aria-label="Close"></button>
                </div>
                <p className="margin0 ">{indexid + 1}/ {data && data.body.questions.length}</p>
            </div>
            <div className=" text-center m-5">
                <h1>section completed</h1>
                <p>good</p>

            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-5">
                <div className="dade1 shadow"
                    style={{ background: ` conic-gradient(#E5383D ${isQuastionFalse1}deg, #fbfbfb 0deg)` }}>
                    <p>{scoreFalse}</p>
                </div>
                <div className="dade1 shadow"
                    style={{ background: ` conic-gradient(#479e56 ${isQuastionTrue1}deg, #fbfbfb 0deg)` }}>
                    <p>{scoreTrue}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3" >
                <button class="btn btn-outline-warning mt-5" onClick={() => {
                    window.location.reload()
                }}>try again</button>
            </div>
        </div>
            :
            <div className=" position-relative heightvh">
                <div className=" contaner ">
                    <div className="del shadow rounded-circle disblayNonesm  " onClick={() => {
                        setResults(true)
                    }} >
                        <button type="button  " className="btn-close " disabled aria-label="Close"></button>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-1 mt-md-5'>
                        <div className=" disblayNOnelg " onClick={() => {
                            setResults(true)
                        }}  >
                            <button type="button  " className="btn-close" disabled aria-label="Close"></button>
                        </div>
                        <div className="dade" ><div className="child"
                            style={{ width: `${linevar}% ` }}
                        ></div></div>
                        <p className="margin0 disblayNonesm">{indexid + 1}/ {data && data.body.questions.length}</p>
                        <img className="disblayNonesm" src="/img/langueg.svg" alt="2322" />
                        <img className="disblayNOnelg" src="/img/alng2.svg" alt="222" />
                    </div>
                    {img ? <div  >
                        <div className=" d-flex justify-content-center  align-items-center fs-3 my-3 my-sm-4 heig" >
                            {soundtrue ? <div>
                                <audio id="sound" autoPlay src={data.body.questions[indexid].data.question.sound} onEnded={() => { setEndTheSmallIcon(false) }}></audio>
                                {endTheSmallIcon ? <LottieAnimation heightluti={55} amrgin3={true} /> :
                                    <img className=" img-fluid g-0" src="/img/medsound.svg" alt="s" onClick={() => {
                                        setEndTheSmallIcon(true)
                                        quastionSound()
                                    }} />} </div> : <span></span>}
                            <p className=" mx-2">
                                {data && data.body.questions[indexid].data.question.questionText}</p>
                        </div>
                        <div className=" row">
                            {data && data.body.questions[indexid].data.answers.map((items, index) => {
                                return (
                                    <div key={index} className="col-6 col-md-3 "  >
                                        <div className={` shadow rounded theBorder my-3 ms-1 cursor ${y ? ` ${index === x ? "borderback" : ""}` : `${index === x && correctIndex === true ? " borderbacktrue" : index === x && correctIndex !== true ? "borderbackFalse" : items.correct ? "borderbacktrue" : ""}`} `}
                                            onClick={Flag ? () => {
                                                satHandelerOnClickCard(false)
                                                handelerKey(index)
                                                setCorrectIndex(items.correct)
                                            } : () => { }
                                            }
                                        >
                                            <img src={items.image} className="g-0 img-fluid w-100 rounded" alt="..." />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div> :
                        <div></div>
                    }
                    {sound ?
                        <div>
                            <div className=" d-flex justify-content-center align-items-center fs-3 my-3 my-sm-4 heig" >
                                {soundtrue ? <div>
                                    <audio id="sound" autoPlay src={data.body.questions[indexid].data.question.sound} onEnded={() => { setEndTheSmallIcon(false) }}></audio>
                                    {endTheSmallIcon ? <LottieAnimation heightluti={55} amrgin3={true} /> :
                                        <img className=" img-fluid g-0" src="/img/medsound.svg" alt="s" onClick={() => {
                                            setEndTheSmallIcon(true)
                                            quastionSound()
                                        }} />} </div> : <span></span>}
                                <p className=" mx-2">
                                    {data && data.body.questions[indexid].data.question.questionText}</p>
                            </div>
                            <audio ref={audioRef} onEnded={() => { setEnd(true) }}>
                                <source src={data.body.questions[indexid].data.answers[0].sound} type="audio/mpeg" />
                            </audio>
                            <div>
                                <div className=" row d-flex justify-content-center">
                                    {data && data.body.questions[indexid].data.answers.map((items, index) => {
                                        return (
                                            <div key={index} className="col-6 col-md-3 my-3 " >
                                                <div className={`d-flex justify-content-center h-100 theBorder shadow rounded my-3 ms-1 cursor ${y ? ` ${index === x ? "borderback" : ""}` : `${index === x && correctIndex === true ?
                                                    "borderbacktrue" : index === x && correctIndex !== true ? "borderbackFalse" : items.correct ? "borderbacktrue" : ""}`} `}

                                                    onClick={Flag ? () => {
                                                        playSound(index)
                                                        satHandelerOnClickCard(false)
                                                        handelerKey(index)
                                                        setCorrectIndex(items.correct)
                                                        setEnd(false)
                                                    } : () => { }}
                                                >
                                                    <div className="hi">
                                                        {index !== x || end ?
                                                            <img src="/img/Sound.svg" className="g-0 img-fluid w-100 rounded " alt="..." /> :
                                                            <LottieAnimation heightluti={120} amrgin1={true} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div> : <div></div>}
                    {text ?
                        <div>
                            <div className=" d-flex justify-content-center align-items-center fs-3 my-3 my-sm-4 heig" >
                                {soundtrue ? <div>
                                    <audio id="sound" autoPlay src={data.body.questions[indexid].data.question.sound} onEnded={() => { setEndTheSmallIcon(false) }}></audio>
                                    {endTheSmallIcon ? <LottieAnimation heightluti={55} amrgin3={true} /> :
                                        <img className=" img-fluid g-0" src="/img/medsound.svg" alt="s" onClick={() => {
                                            setEndTheSmallIcon(true)
                                            quastionSound()
                                        }} />} </div> : <span></span>}
                                <p className=" mx-2">
                                    {data && data.body.questions[indexid].data.question.questionText}</p>
                            </div>
                            <div className="row text-center d-flex justify-content-center">
                                {data && data.body.questions[indexid].data.answers.map((items, index) => {
                                    return (
                                        <div key={index} className={`col-12 theBorder position-relative w-75 rounded shadow m-2 p-2 fs-2 cursor
                                    ${y ? ` ${index === x ? "borderback" : ""}` : `${index === x && correctIndex === true ?
                                                "borderbacktrue" : index === x && correctIndex !== true ? "borderbackFalse" : items.correct ? "borderbacktrue" : ""}`} `}
                                            onClick={Flag ? () => {
                                                satHandelerOnClickCard(false)
                                                handelerKey(index)
                                                setCorrectIndex(items.correct)
                                            } : () => { }}
                                        >
                                            <div dangerouslySetInnerHTML={{ __html: items.text }}>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> : <div></div>}
                    {imgAndText ?
                        <div  >
                            <div className=" d-flex justify-content-center theBorder align-items-center fs-3 my-3 my-sm-4 heig" >
                                {soundtrue ? <div>
                                    <audio id="sound" autoPlay src={data.body.questions[indexid].data.question.sound} onEnded={() => { setEndTheSmallIcon(false) }}></audio>
                                    {endTheSmallIcon ? <LottieAnimation heightluti={55} amrgin3={true} /> :
                                        <img className=" img-fluid g-0" src="/img/medsound.svg" alt="s" onClick={() => {
                                            setEndTheSmallIcon(true)
                                            quastionSound()
                                        }} />} </div> : <span></span>}
                                <p className=" mx-2">
                                    {data && data.body.questions[indexid].data.question.questionText}</p>
                            </div>


                            <div className=" row">
                                {data && data.body.questions[indexid].data.answers.map((items, index) => {
                                    return (
                                        <div className="col-6 col-md-3 " >
                                            <div key={index} className={`shadow rounded my-3 ms-1 cursor
                                        ${y ? ` ${index === x ? "borderback" : ""}` : `${index === x && correctIndex === true ?
                                                    "borderbacktrue" : index === x && correctIndex !== true ? "borderbackFalse" : items.correct ? "borderbacktrue" : ""}`} `}
                                                onClick={Flag ? () => {
                                                    satHandelerOnClickCard(false)
                                                    handelerKey(index)
                                                    setCorrectIndex(items.correct)
                                                } : () => { }}>
                                                <img src={items.image} className="g-0 img-fluid w-100 rounded" alt="..." />
                                                <div className="d-flex justify-content-center">
                                                    <div dangerouslySetInnerHTML={{ __html: items.text }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> : <div></div>}
                    {imgInQuastion ? <div>
                        <div className=" d-flex justify-content-center  align-items-center fs-3 my-3 my-sm-4 heig" >
                            {soundtrue ? <div>
                                <audio id="sound" autoPlay src={data.body.questions[indexid].data.question.sound} onEnded={() => { setEndTheSmallIcon(false) }}></audio>
                                {endTheSmallIcon ? <LottieAnimation heightluti={55} amrgin3={true} /> :
                                    <img className=" img-fluid g-0" src="/img/medsound.svg" alt="s" onClick={() => {
                                        setEndTheSmallIcon(true)
                                        quastionSound()
                                    }} />} </div> : <span></span>}
                            <p className=" mx-2">
                                {data && data.body.questions[indexid].data.question.questionText}</p>
                        </div>
                        <div className="row text-center d-flex justify-content-center">
                            <div className="row">
                                {haveimg ? <div className="col-12 col-md-6 ">
                                    <img src={data.body.questions[indexid].data.question.image} className="manheight g-0 img-fluid w-100 rounded" alt="..." />
                                </div> :
                                    <div className="col-12 col-md-6 my-4 p-2 fs-2 cursor">
                                        <div dangerouslySetInnerHTML={{ __html: data && data.body.questions[indexid].data.question.text }}>
                                        </div>
                                        <hr />
                                        <p>{data.body.questions[indexid].data.question.translation}</p>
                                    </div>}
                                <div className="col col-md-6    ">
                                    {data && data.body.questions[indexid].data.answers.map((items, index) => {
                                        return (
                                            <div key={index} className={`col position-relative w-100  theBorder rounded shadow my-1 my-md-4 p-2 fs-2 cursor
                                    ${y ? ` ${index === x ? "borderback" : ""}` : `${index === x && correctIndex === true ?
                                                    "borderbacktrue" : index === x && correctIndex !== true ? "borderbackFalse" : items.correct ? "borderbacktrue" : ""}`} `}
                                                onClick={Flag ? () => {
                                                    satHandelerOnClickCard(false)
                                                    handelerKey(index)
                                                    setCorrectIndex(items.correct)
                                                } : () => { }}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: items.text }}>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div> : <div></div>}
                </div>
                <div className="cardBotton " >
                    <div className={`dades  ${handelerAfterCheck ? "shadoinmobil" : ""}`}>
                        <div className="childs">
                            {handelerAfterCheck ? <div className=""> {
                                <div>
                                    {correct ? <div className=" py-2 text-md-start text-center px-5">
                                        <div className=" grean margin0 py-2 fs-2"><img className="g-0" src="/img/Chech.svg" alt="21" /> Excellent,correct answer!</div>
                                        <div className="fs-3 d-flex justify-content-center justify-content-md-start py-1"> <span>correct answer:</span>
                                            <div>  {data.body.questions[indexid].data.output.text !== "" ?
                                                data.body.questions[indexid].data.output.text :

                                                <div><audio id="sounda" src={data.body.questions[indexid].data.output.sound} onEnded={() => { setEndTheIcon(false) }}></audio>
                                                    <div > {!endTheIcon ?
                                                        <img className="mx-4" onClick={() => {
                                                            setEndTheIcon(true)
                                                            outputSound()
                                                        }} src="/img/smsound.svg" alt="21" /> : <LottieAnimation heightluti={32} amrgin2={true} />}</div>

                                                </div>} </div>
                                        </div>

                                    </div> :
                                        <div className=" py-2 text-md-start  text-center px-5">
                                            <p className=" read margin0 py-2 fs-2"><img src="/img/Union.svg" alt="21" />Your answer is wrong </p>
                                            <div className="fs-3 d-flex justify-content-center justify-content-md-start py-1"><span>correct answer:</span> <div>
                                                {data.body.questions[indexid].data.output.text !== "" ?
                                                    data.body.questions[indexid].data.output.text
                                                    : <div><audio id="sounda" src={data.body.questions[indexid].data.output.sound} onEnded={() => { setEndTheIcon(false) }}></audio>
                                                        <div > {!endTheIcon ?
                                                            <img className="mx-4" onClick={() => {
                                                                setEndTheIcon(true)
                                                                outputSound()
                                                            }} src="/img/smsound.svg" alt="21" /> : <LottieAnimation heightluti={32} amrgin2={true} />}</div>

                                                    </div>} </div></div>

                                        </div>}
                                </div>}</div>
                                : <div className="d-none"></div>}
                        </div>

                        <div className="childss">


                            <button type="button" className="button1 " ><img className="" src="/img/!.svg" alt="2322" /></button>
                            {handelerAfterCheck ?
                                <button type="button" className={`check  ${correctIndex ? " backTrue" : " backFalse"}`}
                                    onClick={() => {
                                        ((indexid + 1) < (data && data.body.questions.length)) ?
                                            changeThePage() :
                                            setResults(true)
                                        setEndTheSmallIcon(true)
                                        setEndTheIcon(false)
                                        setAnimation(true)
                                    }}>Next

                                </button> :
                                <div>
                                    {handelerOnClickCard ? <button type="button" className="check ">check</button> :
                                        <button type="button" className="check check1 "
                                            onClick={() => {
                                                addBointForScore()
                                                setAnimation(false)
                                            }}>check</button>}
                                </div>
                            }</div>
                    </div>
                </div>

            </div>
        }</div>
    );
}
export default Alefba;




