export async function get({params}) {

    const guides = [
        { id: 1, title: 'some title' },
        { id: 2, title: 'some title 2' },
        { id: 3, title: 'some title 3' },
        { id: 4, title: 'some title 4' },
        { id: 5, title: 'some title 5' },
    ]

    const guide = guides.find((g) => g.id == params.id)

    if (guide) {
        return {
            status: 200,
            body: { guides }
        }
    }

    return {
        status: 404
    }
}