import db from '../models'
import bcrypt, { genSaltSync } from 'bcryptjs'
import { v4 } from 'uuid'
require('dotenv').config()
import chothuecanho from '../../data/chothuecanho.json'
import chothuematbang from '../../data/chothuematbang.json'
import chothuephongtro from '../../data/chothuephongtro.json'
import nhachothue from '../../data/chothuecanho.json'
import { generateCode } from '../utils/generateCode'
import { dataAreas, dataPrices } from '../utils/data'
import { numberToString, numberToStringV2 } from '../utils/common'
const dataBody = [
    {
        body: chothuephongtro.body,
        code: 'CTPT'
    },
    {
        body: chothuematbang.body,
        code: 'CTMB'
    },
    {
        body: chothuecanho.body,
        code: 'CTCH'
    },
    {
        body: nhachothue.body,
        code: 'NCT'
    },
]
const hashPassword = password => bcrypt.hashSync(password, genSaltSync(10))

export const insertService = () => new Promise(async (resolve, reject) => {
    try {
        let provinceCodes = []
        let labelCodes = []
        dataBody.forEach(cate => {
            cate.body.forEach(async (item) => {
                let postId = v4()
                let labelCode = generateCode(item?.header?.class?.classType)?.trim()
                labelCodes?.every(item => item?.code !== labelCode) && labelCodes.push({
                    code: labelCode,
                    value: item?.header?.class?.classType?.trim()
                })
                let attributesId = v4()
                let userId = v4()
                let overviewId = v4()
                let imagesId = v4()
                let authorId = v4()
                let currentArea = numberToString(item?.header?.attributes?.acreage)
                let currentPrice = numberToString(item?.header?.attributes?.price)
                let provinceCode = generateCode(item?.header?.address?.split(',')?.slice(-1)[0]).trim()
                provinceCodes?.every(item => item?.code !== provinceCode) && provinceCodes.push({
                    code: provinceCode,
                    value: item?.header?.address?.split(',')?.slice(-1)[0].trim()
                })
                await db.Post.create({
                    id: postId,
                    title: item?.header?.title,
                    star: item?.header?.star,
                    labelCode,
                    address: item?.header?.address,
                    attributesId,
                    categoryCode: cate.code,
                    description: JSON.stringify(item?.mainContent?.content),
                    userId,
                    overviewId,
                    imagesId,
                    priceCode: dataPrices?.find(price => price.max > currentPrice && price.min <= currentPrice)?.code,
                    areaCode: dataAreas?.find(area => area.max > currentArea && area.min <= currentArea)?.code,
                    provinceCode,
                    authorId,
                    areaNumber: numberToStringV2(item?.header?.attributes?.acreage),
                    priceNumber: numberToStringV2(item?.header?.attributes?.price)
                })
                await db.Attribute.create({
                    id: attributesId,
                    price: item?.header?.attributes?.price,
                    acreage: item?.header?.attributes?.acreage,
                    published: item?.header?.attributes?.published,
                    hashtag: item?.header?.attributes?.hashtag,
                })
                await db.Image.create({
                    id: imagesId,
                    image: JSON.stringify(item?.images)
                })
                await db.Label.findOrCreate({
                    where: { code: labelCode },
                    defaults: {
                        code: labelCode,
                        value: item?.header?.class?.classType
                    }
                })
                await db.Overview.create({
                    id: overviewId,
                    code: item?.overview?.content.find(i => i.name === "Mã tin:")?.content,
                    area: item?.overview?.content.find(i => i.name === "Khu vực")?.content,
                    type: item?.overview?.content.find(i => i.name === "Loại tin rao:")?.content,
                    target: item?.overview?.content.find(i => i.name === "Đối tượng thuê:")?.content,
                    bonus: item?.overview?.content.find(i => i.name === "Gói tin:")?.content,
                    created: item?.overview?.content.find(i => i.name === "Ngày đăng:")?.content,
                    expired: item?.overview?.content.find(i => i.name === "Ngày hết hạn:")?.content,
                })
                await db.User.create({
                    id: userId,
                    name: item?.contact?.content.find(i => i.name === "Liên hệ:")?.content,
                    password: hashPassword('123456'),
                    phone: item?.contact?.content.find(i => i.name === "Điện thoại:")?.content,
                    zalo: item?.contact?.content.find(i => i.name === "Zalo")?.content,
                })
            })
        })
        provinceCodes.forEach(async (item) => {
            await db.Province.create(item)
        })
        labelCodes.forEach(async (item) => {
            await db.Label.create(item)
        })
        resolve('done')
    } catch (error) {
        reject(error)
    }
})

export const createPricesAndAreas = () => new Promise((resolve, reject) => {
    try {
        dataPrices.forEach((async (item, index) => {
            await db.Price.create({
                code: item.code,
                value: item.value,
                order: index + 1
            })
        }))
        dataAreas.forEach((async (item, index) => {
            await db.Area.create({
                code: item.code,
                value: item.value,
                order: index + 1
            })
        }))
        resolve('OK')
    } catch (error) {
        reject(error)
    }
})