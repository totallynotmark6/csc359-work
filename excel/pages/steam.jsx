import React from 'react';

export default function TestPage() {
    const [appName, setAppName] = React.useState('');
    const [debugData, setDebugData] = React.useState([]);
    const [appId, setAppId] = React.useState(255710);

    const fetchData = async () => {
        // if appName consists of a number, set appId to appName
        if (!isNaN(appName)) {
            setAppId(appName)
            return
        }
        try {
            const res = await fetch('https://corsproxy.io/?' + encodeURIComponent("https://api.steampowered.com/ISteamApps/GetAppList/v0002/"))
            const data = await res.json()
            const apps = data.applist.apps.filter(app => app.name === appName).reverse()
            const includeApps = data.applist.apps.filter(app => app.name.includes(appName)).reverse()
            if (apps[0] === undefined) {
                console.error('App not found')
                // includeApps is a list
                let obj = {
                    name: 'App not found',
                    appid: -1
                }
                includeApps.unshift(obj)
                setDebugData(includeApps)
                setAppId(-1)
                return
            }
            setDebugData(includeApps)
            setAppId(apps[0].appid)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className='p-4'>
            <h1 className="text-3xl font-bold underline text-center">Steam Test</h1>
            {/* input field for the app's name and a submit button */}
            <input
                type="text"
                className="border border-slate-300 p-2"
                value={appName}
                onChange={(event) => setAppName(event.target.value)}
                placeholder="Enter app name or ID"
                // on enter, fetch data
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        fetchData()
                    }
                }}
            />
            <button
                className="border border-slate-300 p-2"
                onClick={fetchData}
            >
                Search
            </button>
            <p>App ID: {appId}</p>
            <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`} />
            <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/library_hero.jpg`} />
            {/* print debug (a list of ?) */}
            <ul>
                {debugData.map((app, index) => {
                    if (app.appid === appId) {
                        return (
                            <li key={index} className="font-bold text-red-700">{app.name} - {app.appid}</li>
                        )
                    
                    }
                    return (
                        <li key={index}>{app.name} - {app.appid}</li>
                    )
                })}
            </ul>
        </div>
    );
}