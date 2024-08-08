export const fakeOrg = [
  {
    id: 1,
    orgLevel: 1,
    orgName: "组织名称修改1",
    headName: "组织名称修改1",
    headPhone: "120000000000",
    status: 1,
    parentId: 0,
    childList: [
      {
        id: 2,
        orgLevel: 2,
        orgName: "二级组织1",
        headName: "二级组织1",
        headPhone: "15100000001",
        status: 1,
        parentId: 1,
        childList: [
          {
            id: 3,
            orgLevel: 3,
            orgName: "三级组织1",
            headName: "三级组织1",
            headPhone: "15100000001",
            status: 1,
            parentId: 2,
            childList: [],
            parent: null
          }
        ],
        parent: null
      },
      {
        id: 4,
        orgLevel: 2,
        orgName: "二级组织2",
        headName: "二级组织2",
        headPhone: "15100000001",
        status: 1,
        parentId: 1,
        childList: [],
        parent: null
      }
    ],
    parent: null
  },
  {
    id: 5,
    orgLevel: 1,
    orgName: "禁用组织1",
    headName: "禁用组织1",
    headPhone: "15100000001",
    status: 1,
    parentId: 0,
    childList: [
      {
        id: 6,
        orgLevel: 2,
        orgName: "禁用组织2",
        headName: "禁用组织1",
        headPhone: "15100000001",
        status: 1,
        parentId: 5,
        childList: [
          {
            id: 8,
            orgLevel: 3,
            orgName: "禁用组织4",
            headName: "禁用组织4",
            headPhone: "15100000001",
            status: 1,
            parentId: 6,
            childList: [],
            parent: null
          },
          {
            id: 9,
            orgLevel: 3,
            orgName: "禁用组织5",
            headName: "禁用组织5",
            headPhone: "15100000001",
            status: 1,
            parentId: 6,
            childList: [],
            parent: null
          }
        ],
        parent: null
      },
      {
        id: 7,
        orgLevel: 2,
        orgName: "禁用组织3",
        headName: "禁用组织3",
        headPhone: "15100000001",
        status: 1,
        parentId: 5,
        childList: [
          {
            id: 10,
            orgLevel: 3,
            orgName: "禁用组织7-1",
            headName: "禁用组织7-1",
            headPhone: "15100000001",
            status: 1,
            parentId: 7,
            childList: [],
            parent: null
          },
          {
            id: 11,
            orgLevel: 3,
            orgName: "禁用组织7-2",
            headName: "禁用组织7-2",
            headPhone: "15100000001",
            status: 1,
            parentId: 7,
            childList: [],
            parent: null
          }
        ],
        parent: null
      }
    ],
    parent: null
  },
  {
    id: 12,
    orgLevel: 1,
    orgName: "父组织1",
    headName: "父组织1",
    headPhone: "15200000000",
    status: 1,
    parentId: 0,
    childList: [],
    parent: null
  }
];
