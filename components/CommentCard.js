import { StyleSheet, Text, View } from 'react-native';

import UserIdentifier from './UserIdentifier';

function CommentCard({ comment }) {
    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                {comment.author ? <UserIdentifier user={comment.author} /> : <Text style={styles.title}>Anonyme</Text>}
                <Text style={styles.title}>{comment.content}</Text>
                <Text style={styles.createdAt}>Publié le {new Date(comment.createdAt).toLocaleDateString()}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    detailsContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    createdAt: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
});

export default CommentCard;