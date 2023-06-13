import clsx from 'clsx'
import Image from 'next/image'

export type PhotoProps = {
    src?: string
    alt: string
    className?: string
    width?: number
    height?: number
}

const PHOTO_SIZE = 28

export const Photo = ({
    src,
    alt,
    className,
    width = PHOTO_SIZE,
    height = PHOTO_SIZE,
}: PhotoProps) => {
    const userIconSize = (width * 2) / 3

    return src ? (
        <div
            className={clsx('relative rounded-full overflow-hidden', className)}
            style={{ width, height }}
        >
            <Image
                src={src}
                alt={alt}
                className="object-cover"
                sizes="100%"
                fill
                referrerPolicy="no-referrer"
            />
        </div>
    ) : (
        <div
            className={clsx(
                'flex items-center justify-center',
                'p-1 rounded-full bg-gray-300',
                className
            )}
            style={{ width, height }}
        ></div>
    )
}
