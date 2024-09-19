import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { renderToString} from "react-dom/server";

const PlaySelf = () =>
{
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleReference = useRef(null);
    const toggle = (e, indexValue) =>
    {
        if (lock)
        {
            return 0;
        }
        if (count % 2 === 0 && data[indexValue] === "")
        {
            e.target.innerHTML = renderToString(
                <BsRecordCircleFill
                    className="cross-circle"
                    color="green"
                    size={"30px"}
                />
            );
            setCount(count + 1);
            dataHandler(indexValue, "O");
        } else if (count % 2 !== 0 && data[indexValue] === "")
        {
            e.target.innerHTML = renderToString(
                <ImCross className="cross-circle" color="red" size={"30px"} />);
            setCount(count + 1);
        }
        dataHandler(indexValue, "X");
    };
    useEffect(() =>
    {
        checkWin();
    }, [data]);

    const dataHandler = (indexValue, turnData) =>
    {
        setData((currData) =>
            currData.map((xo, index) =>
            {
                if (index === indexValue && xo === "")
                {
                    xo = turnData;
                }
                return xo;
            }
            
            )); 
    };

    const checkWin = () =>
    {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "")
        {
            WinnerHandler(data[2]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "")
        {
            WinnerHandler(data[5]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "")
        {
            WinnerHandler(data[8]);

        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "")
        {
            WinnerHandler(data[6]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "")
        {
            WinnerHandler(data[7]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "")
        {
            WinnerHandler(data[8]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "")
        {
            WinnerHandler(data[8]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "")
        {
            WinnerHandler(data[6]);
        }

    };

    const WinnerHandler = (winner) =>
    {
        setLock(true);
        titleReference.current.innerHTML = `COGRATULATIONS WINNER IS ${ winner === "X"
            ? renderToString(<ImCross color="red" size={"30px"} />)
            : renderToString(<BsRecordCircleFill color="green" size={"30px"} />) }`

    }


    const resetHandler = () =>
    {
        setData(["", "", "", "", "", "", "", "", ""]);
        setLock(false);
        setCount(0);
        titleReference.current.innerText = "WELCOME TO THE TIC-TAC-TOE GAME"
        document.querySelectorAll(".cross-circle").forEach((element) => element.remove());
    };

    return (
        <div className="m-auto w-2/3 shadow-lg bg-white p-4">
            <div className="flex flex-col items-center m-auto">
                <div className="p-5 my-5">
                    <h1 ref={titleReference} className="flex m-auto font-bold text-3x1">
                        WELCOME TO THE TIC-TAC-TOE GAME
                    </h1>
                </div>

                <div className="flex m-auto flex-col">
                    <div className="flex">
                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items-center justify-center"
                            onClick={(e) => toggle(e, 0)}>
                        </div>

                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items-center justify-center"
                            onClick={(e) => toggle(e, 1)}>
                        </div>

                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items-center justify-center"
                            onClick={(e) => toggle(e, 2)}
                        ></div>
                    </div>

                    <div className="flex">
                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items-center justify-center" onClick={(e) => toggle(e, 3)}
                        ></div>

                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items-center justify-center" onClick={(e) => toggle(e, 4)}
                        ></div>

                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items-center justify-center" onClick={(e) => toggle(e, 5)}
                        ></div>
                    </div>

                    <div className="flex">
                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items-center justify-center"
                            onClick={(e) => toggle(e, 6)}>
                        </div>
                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items center justify-center"
                            onClick={(e) => toggle(e, 7)}>
                        </div>
                        <div
                            className="bg-gray-900 h-20 w-20 p-2 m-1 flex items center justify-center"
                            onClick={(e) => toggle(e, 8)}>
                        </div>
                    </div>
                </div>

                <div className="m-10">
                    <button
                        onClick={resetHandler}
                        className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlaySelf