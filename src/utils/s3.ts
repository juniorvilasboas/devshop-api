import { Injectable } from '@nestjs/common'
import * as aws from 'aws-sdk'

@Injectable()
export class S3 {
  constructor() {
    aws.config.update({
      region: 'us-east-1',
      accessKeyId: 'AKIAW24LEVE3FYD5EFN3',
      secretAccessKey: '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'
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
