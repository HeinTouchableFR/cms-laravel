<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */

namespace App\Models{
    /**
     * App\Models\Attachment
     *
     * @property int $id
     * @property string $filename
     * @property int $filesize
     * @property \Illuminate\Support\Carbon|null $created_at
     * @property \Illuminate\Support\Carbon|null $updated_at
     *
     * @method static \Illuminate\Database\Eloquent\Builder|Attachment newModelQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Attachment newQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Attachment query()
     * @method static \Illuminate\Database\Eloquent\Builder|Attachment whereCreatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Attachment whereFilename($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Attachment whereFilesize($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Attachment whereId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Attachment whereUpdatedAt($value)
     *
     * @mixin \Eloquent
     */
    class IdeHelperAttachment
    {
    }
}

namespace App\Models{
    /**
     * App\Models\Category
     *
     * @property int $id
     * @property string $name
     * @property string $slug
     * @property \Illuminate\Support\Carbon|null $created_at
     * @property \Illuminate\Support\Carbon|null $updated_at
     * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Content> $contents
     * @property-read int|null $contents_count
     *
     * @method static \Illuminate\Database\Eloquent\Builder|Category newModelQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Category newQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Category query()
     * @method static \Illuminate\Database\Eloquent\Builder|Category whereCreatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Category whereId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Category whereName($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Category whereSlug($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Category whereUpdatedAt($value)
     *
     * @mixin \Eloquent
     */
    class IdeHelperCategory
    {
    }
}

namespace App\Models{
    /**
     * App\Models\Comment
     *
     * @property int $id
     * @property string|null $email
     * @property string|null $username
     * @property string|null $content
     * @property int $content_id
     * @property int $user_id
     * @property int|null $comment_id
     * @property int $spam
     * @property \Illuminate\Support\Carbon|null $created_at
     * @property \Illuminate\Support\Carbon|null $updated_at
     * @property-read Comment|null $parent
     * @property-read \Illuminate\Database\Eloquent\Collection<int, Comment> $replies
     * @property-read int|null $replies_count
     * @property-read \App\Models\Content|null $target
     * @property-read \App\Models\User $user
     *
     * @method static \Illuminate\Database\Eloquent\Builder|Comment newModelQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Comment newQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Comment query()
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereCommentId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereContent($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereContentId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereCreatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereEmail($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereSpam($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereUpdatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereUserId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Comment whereUsername($value)
     *
     * @mixin \Eloquent
     */
    class IdeHelperComment
    {
    }
}

namespace App\Models{
    /**
     * App\Models\ContactRequest
     *
     * @property int $id
     * @property string $ip
     * @property \Illuminate\Support\Carbon|null $created_at
     * @property \Illuminate\Support\Carbon|null $updated_at
     *
     * @method static \Illuminate\Database\Eloquent\Builder|ContactRequest newModelQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|ContactRequest newQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|ContactRequest query()
     * @method static \Illuminate\Database\Eloquent\Builder|ContactRequest whereCreatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|ContactRequest whereId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|ContactRequest whereIp($value)
     * @method static \Illuminate\Database\Eloquent\Builder|ContactRequest whereUpdatedAt($value)
     *
     * @mixin \Eloquent
     */
    class IdeHelperContactRequest
    {
    }
}

namespace App\Models{
    /**
     * App\Models\Content
     *
     * @property int $id
     * @property string $title
     * @property string $slug
     * @property string|null $description
     * @property string|null $content
     * @property int $online
     * @property string $type
     * @property int $user_id
     * @property \Illuminate\Support\Carbon|null $created_at
     * @property \Illuminate\Support\Carbon|null $updated_at
     * @property int|null $category_id
     * @property int|null $attachment_id
     * @property-read \App\Models\Attachment|null $attachment
     * @property-read \App\Models\Category|null $category
     * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Tag> $tags
     * @property-read int|null $tags_count
     * @property-read \App\Models\User $user
     *
     * @method static \Illuminate\Database\Eloquent\Builder|Content newModelQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Content newQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Content query()
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereAttachmentId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereCategoryId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereContent($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereCreatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereDescription($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereOnline($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereSlug($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereTitle($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereType($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereUpdatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Content whereUserId($value)
     *
     * @mixin \Eloquent
     */
    class IdeHelperContent
    {
    }
}

namespace App\Models{
    /**
     * App\Models\Option
     *
     * @property string $key
     * @property string $value
     * @property \Illuminate\Support\Carbon|null $created_at
     * @property \Illuminate\Support\Carbon|null $updated_at
     *
     * @method static \Illuminate\Database\Eloquent\Builder|Option newModelQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Option newQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Option query()
     * @method static \Illuminate\Database\Eloquent\Builder|Option whereCreatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Option whereKey($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Option whereUpdatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Option whereValue($value)
     *
     * @mixin \Eloquent
     */
    class IdeHelperOption
    {
    }
}

namespace App\Models{
    /**
     * App\Models\Tag
     *
     * @property int $id
     * @property string $name
     * @property string $slug
     * @property string|null $description
     * @property int|null $position
     * @property int $visible
     * @property int|null $tag_id
     * @property \Illuminate\Support\Carbon|null $created_at
     * @property \Illuminate\Support\Carbon|null $updated_at
     * @property-read \Illuminate\Database\Eloquent\Collection<int, Tag> $children
     * @property-read int|null $children_count
     * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Content> $contents
     * @property-read int|null $contents_count
     * @property-read Tag|null $parent
     *
     * @method static \Illuminate\Database\Eloquent\Builder|Tag newModelQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Tag newQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|Tag query()
     * @method static \Illuminate\Database\Eloquent\Builder|Tag whereCreatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Tag whereDescription($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Tag whereId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Tag whereName($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Tag wherePosition($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Tag whereSlug($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Tag whereTagId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Tag whereUpdatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|Tag whereVisible($value)
     *
     * @mixin \Eloquent
     */
    class IdeHelperTag
    {
    }
}

namespace App\Models{
    /**
     * App\Models\User
     *
     * @property int $id
     * @property string $username
     * @property string $email
     * @property \Illuminate\Support\Carbon|null $email_verified_at
     * @property string $password
     * @property string|null $remember_token
     * @property \Illuminate\Support\Carbon|null $created_at
     * @property \Illuminate\Support\Carbon|null $updated_at
     * @property int $status
     * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
     * @property-read int|null $notifications_count
     * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Permission> $permissions
     * @property-read int|null $permissions_count
     * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Role> $roles
     * @property-read int|null $roles_count
     * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
     * @property-read int|null $tokens_count
     *
     * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
     * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
     * @method static \Illuminate\Database\Eloquent\Builder|User permission($permissions)
     * @method static \Illuminate\Database\Eloquent\Builder|User query()
     * @method static \Illuminate\Database\Eloquent\Builder|User role($roles, $guard = null)
     * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
     * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
     * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
     * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
     * @method static \Illuminate\Database\Eloquent\Builder|User whereStatus($value)
     * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
     * @method static \Illuminate\Database\Eloquent\Builder|User whereUsername($value)
     *
     * @mixin \Eloquent
     */
    class IdeHelperUser
    {
    }
}
