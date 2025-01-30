export const datos = [];
const url = 'https://api.thecatapi.com/v1/images/search?limit=5';

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
                    <img src={item.url} alt="" width={item.width} height={item.height} />
                </div>
            ))}
        </div>
    );
};

export default callApi;