// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse<RESResponse.Response<RESProject.Related[]>>) {

    const {classification} = req.query

    const data: RESProject.Projects[] = [];

    let pageSize = 8;

    const pictures = [
        'https://static.uper.io/kwd/banner/1572954168170123264.jpg',
        'https://static.uper.io/kwd/banner/1574062963084496896.jpeg',
        'https://static.uper.io/kwd/banner/1574063095213461504.jpeg',
    ];

    for (let i = 0; i < pageSize; i += 1) {
        data.push({
            id: `157357243831314432${i}`,
            picture: pictures[i % 3],
            name: '中国共产主义青年团建团 100 周年',
            dated_at: `2022-09-2${i}`
        })
    }

    res
        .status(200)
        .json({
            code: 20000,
            message: 'Success',
            data: data,
        })
}
