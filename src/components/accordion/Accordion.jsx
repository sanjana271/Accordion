//single selection
import { useState } from "react"
import data from "./data"

export default function Accordion() {
    const [selected, setSelected] = useState(null)

    function singleSelection(getcurrentId) {
        //we are getting id of element on which we are clicking
        setSelected(getcurrentId === selected ? null : getcurrentId)//if its already open then close it
    }

    return (
        <div className="wrapper">{/*whole page */}
        <div className="aksed">Few repeatedly Asked Questions:</div>
            <div className="accordian">{/*box - include title i.e question and content i.e answer*/}
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className="item">{/*each question and ans */}
                            <div onClick={() => singleSelection(dataItem.id)} className="title">
                                <div>{dataItem.question}</div>
                                <span>+</span>
                            </div>
                            <div>
                                {//whatever id we got is similar to id of element we are choosing
                                    selected === dataItem.id ?
                                        <div className="content">{dataItem.answer}</div>
                                        : null
                                }
                            </div>
                        </div>)
                        : <div>No data found!</div>
                }
            </div>
        </div>
    )
}