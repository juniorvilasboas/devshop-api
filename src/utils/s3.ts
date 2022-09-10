import { Injectable } from '@nestjs/common'
import * as aws from 'aws-sdk'

@Injectable()
export class S3 {
  constructor() {
    aws.config.update({
      region: process.env.REGION,
      accessKeyId: process.env.ACCESSKEYID,
      secretAccessKey: process.env.SECRETACCESSKEY
    })
  }

  async upload(
    filename: string,
    stream: any,
    mimetype: string,
    bucket: string,
    destinationFilename: string
  ): Promise<string> {
    const s3 = new aws.S3()
    console.log(filename)

    const s3Params = {
      Bucket: bucket,
      Key: destinationFilename,
      ACL: 'public-read',
      ContentType: mimetype,
      Body: stream
    }

    const { Location } = await s3.upload(s3Params).promise()

    console.log(Location)
    return Location
  }
}
