export const datos = [];
const url = 'https://www.freetestapi.com/api/v1/cats?limit=5';

const callApi = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        datos.push(...data);
    } catch (err) {
        console.error('Error:', err);
    }

    console.log(datos);

    return (
        <div>
            {datos.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.origin}</p>
                    <img src={item.image} alt="" width={100} height={100} />
                </div>
            ))}
        </div>
    );
};

export default callApi;