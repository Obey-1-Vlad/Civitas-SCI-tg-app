export async function queryRowById(rowId: string) {
    const response = await fetch(
        `https://datasets-server.huggingface.co/rows?dataset=matthieulel%2Fgalaxy10_decals&config=default&split=train&offset=${rowId}&length=1`,
        // not really required at the begining
        // {
        //     headers: { Authorization: `Bearer ${API_TOKEN}` },
        //     method: "GET"
        // }
    );
    const result = await response.json();
    return result;
}
