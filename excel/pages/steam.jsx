import React from 'react';

export default function TestPage() {
    const [appName, setAppName] = React.useState('');
    const [appId, setAppId] = React.useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch('https://corsproxy.io/?' + encodeURIComponent("https://api.steampowered.com/ISteamApps/GetAppList/v0002/"))
            const data = await res.json()
            const apps = data.applist.apps.filter(app => app.name === appName)
            console.log(data.applist.apps.filter(app => app.name.includes(appName)))
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
        </div>
    );
}