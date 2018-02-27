import {List as _List_} from '@aws/types';

export const _ChildHealthCheckList: _List_ = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
        },
        locationName: 'ChildHealthCheck',
    },
};