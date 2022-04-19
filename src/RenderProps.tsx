import { useEffect, useState } from "react"

const API = "https://swapi.dev/api/people"

const ComponentWithData: React.FC<{
  renderProp: (data: any) => React.ReactNode
}> = ({ renderProp }) => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    async function apiCall() {
      const swapiResponse = await fetch(API)

      if (swapiResponse.ok) {
        const swapiData = await swapiResponse.json()
        setData(swapiData)
      }
    }

    apiCall()
  }, [])

  return <div>{renderProp(data)}</div>
}

const Consumer: React.FC<{ data: any }> = ({ data }) => {
  return <div>{data}</div>
}

const RenderProps = () => {
  return (
    <div>
      <ComponentWithData
        renderProp={(data) =>
          data && (
            <>
              <Consumer data={data} />
              <Consumer data={data} />
            </>
          )
        }
      />
    </div>
  )
}

export default RenderProps
