import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

function GameCardSkeleton(props) {
    return (
            <Card>

            <Skeleton height={"300px"}>
                <CardBody>
                    <SkeletonText/>
                </CardBody>

            </Skeleton>
            </Card>
    );
}

export default GameCardSkeleton;